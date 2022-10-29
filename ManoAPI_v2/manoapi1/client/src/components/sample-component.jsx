import axios from 'axios';
import React from 'react';

function callServer() {

    axios.get('http://localhost:8000/test', {
        params: {
            table: 'equipe'
        }
    }).then((response)=>{
        console.log(response.data)
    });
    return( <p>ok</p>)
}


export function SampleComponent(){
    return (<div>
        This is a sample component

    </div>)
}