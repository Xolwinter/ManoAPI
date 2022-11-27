import React, {Component} from 'react'
import { deleteTeam } from '../JS/apiCall';



class List extends Component{
    
    constructor(props){
        super(props)
        this.handleDelete = this.handleDelete.bind(this);
        
    }

    async handleDelete(event){
        await deleteTeam(this.props.id)
        event.preventDefault()
    }

    render(){
        return <span onClick={this.handleDelete}>&#10060;</span>
    }

}

export default List