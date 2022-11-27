import fetch from 'node-fetch';


export async function addTeam(nameTeam){

    
    let team = {
        name:nameTeam,
        availability:{
            available:'Yes'
        }
    }
    
    fetch('http://localhost:3005/team', {
        mode:'cors',
        method: 'POST',
        body: JSON.stringify(team),
        headers: { 'Accept': 'application/json','Content-Type': 'application/json' }
    }).then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.log(err));
    


    return "Sucess"
    
    
}

export async function getTeams(){

    let team;

    await fetch('http://localhost:3005/team', {
        mode:'cors',
        method: 'GET',
        headers: { 'Accept': 'application/json','Content-Type': 'application/json' }
    }).then(res => res.json())
      .then(json => {team = json})
      .catch(err => console.log(err));
    
    return team
    
}

export async function deleteTeam(idTeam){

    let res;

    let team = {
        id:idTeam,
        availability:{
            available:'Yes'
        }
    }

    await fetch('http://localhost:3005/team', {
        mode:'cors',
        method: 'DELETE',
        body: JSON.stringify(team),
        headers: { 'Accept': 'application/json','Content-Type': 'application/json' }
    }).then(res => res.json())
      .then(json => {res = json})
      .catch(err => console.log(err));
    
    return res
    
}