import {useState} from "react";
import "./newProduct.css";
import {
  getStorage,
  ref,uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import {addProduct} from "../../redux/apiCalls";
import {useDispatch,useSelector} from "react-redux";

export default function NewProduct(){
   const [inputs, setInputs] = useState({});
   const [file, setFile] = useState(null);
   const [cat, setCat] = useState([]);
   const dispatch = useDispatch();
   const product = useSelector((state) => state.product.product);

   const handleChange = (e)=>{
    setInputs(prev=>{
      return {...prev, [e.target.name]:e.target.value}
    })
   }
   const handleCat = (e)=>{
    setCat(e.target.value.split(","));
   };
   const handleClick = (e)=>{
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app)
    const storageRef = ref(storage, fileName)
    const uploadTask = uploadBytesResumable(storageRef, file);

// Enregistrez trois observateurs :
// 1. observateur 'state_changed', appelé à chaque fois que l'état change
// 2. Observateur d'erreur, appelé en cas d'échec
// 3. Observateur d'achèvement, appelé en cas d'achèvement réussi
uploadTask.on('state_changed', 
  (snapshot) => {
    // Observer les événements de changement d'état tels que la progression, la pause et la reprise
    // Obtenez la progression de la tâche, y compris le nombre d'octets téléchargés et le nombre total d'octets à télécharger
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
        default:
    }
  }, 
  (error)=> {
    // Gérer les téléchargements infructueux
  }, 
  ()=> {
    // Gérer les téléchargements réussis une fois terminés
    // Par exemple, récupérez l'URL de téléchargement : https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL)=> {
      console.log({...inputs, img:downloadURL, categories: cat});
      addProduct(product,dispatch)
    });
  }
);

   };


  return (
    <div className="newProduct">
      <h1 className="addProductTitle">Nouveau produit</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input 
          type="file"
           id="file"
            onChange={e=>setFile(e.target.files)[0]}/>
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input 
          name="title"
           placeholder="Apple Airpods"
            onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input 
          name="dec"
           placeholder="description"
            onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input 
          name="price" 
          type="number"
           placeholder="100"
            onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Categories</label>
          <input 
          type="cat" 
          placeholder="jeans,pulls"
           onChange={handleCat}/>
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <select 
          name="inStock"
           onChange={handleChange}>
            <option value="yes">Oui</option>
            <option value="no">Non</option>
          </select>
        </div>
        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
}
