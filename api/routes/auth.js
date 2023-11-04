const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");


const invalidTokens = [];


function authenticateToken(req,res,next) {
  const token = req.header("Authorization");
  if(!token) return res.status(401).json("Accès refusé.");

  jwt.verify(token, process.env.JWT_SEC, (err, user) => {
    if(err) return res.status(403).json("Token non valide.");
    req.user = user;
    next();
  });
}


//REGISTER

router.post("/register", async(req,res)=>{
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });

  try{
    const savedUser = await newUser.save();
    res.status(201).json(savedUser.toJSON());
  }catch(err){
    return res.status(500).json(err);
  }
});


//LOGIN

router.post('/login', async(req,res)=>{
  try{
    const user = await User.findOne({
      username: req.body.username
    });

    if(!user) {
      return res.status(401).json("Mauvais nom d'utilisateur");
    }

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    const inputPassword = req.body.password;

    if(originalPassword !== inputPassword) {
      return res.status(401).json("Mauvais mot de passe");
    }

    // Générez un token JWT
    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      {expiresIn: "3d"}
    );

    const {password, ...others} = user._doc;
    res.status(200).json({...others, accessToken});
  }catch(err) {
    return res.status(500).json(err);
  }
});

//LOGOUT 

router.post('/logout', (req,res)=>{
  const token = req.header("Authorization");
  if(token && invalidTokens.includes(token)) {
    invalidTokens.splice(invalidTokens.indexOf(token), 1);
    res.status(200).json("Déconnexion réussie.");
  }else{
    res.status(400).json("Token introuvable ou déjà invalide.");
  }
});



// DELETE USER

router.delete("/:id", async(req,res)=> {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    !user && res.status(404).json("Utilisateur non trouvé.");

    res.status(200).json("L'utilisateur a été supprimé avec succès.");
  }catch(err){
    return res.status(500).json(err);
  }
});



module.exports = router;