import React, {Component} from 'react'
import {addTeam} from '../JS/apiCall'


class Input extends Component{

    constructor(props) {

        super(props);
        
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    async handleSubmit(event) {
        if(this.state.value!==""){
            await addTeam(this.state.value)
        }
        else{
            alert("Veuillez entrer le nom d'une équipe");
        }
        
        event.preventDefault();
    }

    render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Nom équipe sur Betclic :
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Ajouter" />
          </form>
        );
      }

}

export default Input