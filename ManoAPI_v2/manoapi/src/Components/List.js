import React, {Component} from 'react'

function createList(matchs){
    const listItems = matchs.map((match) =>
        <li key={match.equipe}>{match.cote} - {match.equipe}</li>
    );
    return listItems
}

class List extends Component{

    

    render(){
        return createList(this.props.matchs)
    }

}

export default List