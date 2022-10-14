import React, {useState} from 'react'
import './App.css';
import Button from './Components/Button'
import List from './Components/List'
import {actualizeDB} from './Script/ManoApiFunction'



function App() {

  const [matchs,setMatchs] = useState([
    {cote:1.22,equipe:'PSG'},
    {cote:1.83,equipe:'Juventus'},
    {cote:2.31,equipe:'Inter Milan'},
    {cote:1.13,equipe:'Bayern Munich'},
    {cote:1.94,equipe:'Club Bruges'},
    {cote:4.23,equipe:'Liverpool'},
    {cote:12,equipe:'FC Metz'}]
  )


  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Bienvenu(e), ici vous pouvez trouver les côtes des matches en temps réel sur Betclic
        </p>
        <p>
          Pour démarrer, actualiser les cotes grâce au bouton "Actualiser" ci-dessous.
        </p>
        <Button text='Actualiser' onPress={()=>{actualizeDB(setMatchs, matchs)}}></Button>
        <p>
          Listes des match : 
        </p>
        <List matchs = {matchs}></List>
      </header>
    </div>
  );
}

export default App;
