import React, {useState} from 'react'
import './App.css';
import Button from './Components/Button'
import List from './Components/List'
import Input from './Components/Input'
import {getTeams, addTeam, deleteTeam} from './JS/apiCall'


function App() {

  const [equipes,setEquipe] = useState([])
  console.log(equipes)

  return (
    <div className="App">
      <header className="App-header">
        
        <p>Bienvenu(e), ici vous pouvez trouver les côtes des matches en temps réel sur Betclic</p>

        <p> Pour démarrer, ajouter des équipes dont la côte est à récupérer</p>

        <p>Actualiser les équipes grâce au bouton "Actualiser" ci-dessous pour récupérer vos équipes enregistrées</p>

        <p>Cliquer sur la croix pour supprimer une équipe, et n'oubliez pas d'actualiser !</p>

        <Button text='Actualiser' onPress={async()=>{setEquipe(await getTeams())}}></Button>

        <Input ></Input>

        <p>
          Listes des match : 
        </p>
        <List equipes = {equipes}></List> 
      </header>
    </div>
  );
}

export default App;


/* import logo from './logo.svg';
import './App.css';

function App() {
  console.log("this is spartacus")
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> an save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
 */