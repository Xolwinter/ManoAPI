const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
var fs = require('fs')

const url = "https://api-football-vi.p.rapidapi.com/v3/timezone"

const options = {
    method:'GET',
    headers:{
        'X-RapidAPI-Key': '9311125e6amsha82147373be43c8p17beecjsn2402d48d6df7',
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
};

fetch(url, options)
    .then(res => res.json())
    .then(json => {
        //console.log(json)

        var jsonContent = JSON.stringify(json.response)
        console.log(json.response)

        fs.writeFile("output.txt", jsonContent, 'utf8', function(err){

            if(err){
                console.log("error")
                return console.log(err)
            }
            
            console.log("JSON file saved")
        
        })
    })
    .then(err => console.log('error:',err))
