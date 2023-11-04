import "./newUser.css";

export default function NewUser(){
  return(
    <div className="newUser">
      <h1 className="newUserTitle">Nouvel utilisateur</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="john"/>
        </div>
        <div className="newUserItem">
          <label>Nom et prénom</label>
          <input type="text" placeholder="John Smith"/>
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com"/>
        </div>
        <div className="newUserItem">
          <label>Mot de passe</label>
          <input type="password" placeholder="password"/>
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+1 123 456 78"/>
        </div>
        <div className="newUserItem">
          <label>Adresse</label>
          <input type="text" placeholder="New York | USA"/>
        </div>
        <div className="newUserItem">
          <label>Genre</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male"/>
            <label for="male">Homme</label>
            <input type="radio" name="gender" id="female" value="female"/>
            <label for="female">Femme</label>
            <input type="radio" name="gender" id="other" value="other"/>
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Actif</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Oui</option>
            <option value="no">Non</option>
          </select>
        </div>
        <button className="newUserButton">Créer</button>
      </form>
    </div>
  );
}
