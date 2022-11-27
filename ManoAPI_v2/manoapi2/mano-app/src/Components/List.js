import React, {Component} from 'react'
import Cross from './Cross'

function createList(equipes){
    const listItems = equipes.map((equipe) =>
        <div key={equipe.id}>
            <li >{equipe.name}</li>
            <Cross id={equipe.id}></Cross>
        </div>
    );
    return listItems
}

class List extends Component{
    
    render(){
        return createList(this.props.equipes)
    }

}

export default List