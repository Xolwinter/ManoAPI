const cors = require('cors');
const express = require ('express')
const {Pool} = require('pg');

const app = express();

const pool = new Pool({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST_IP,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.REACT_APP_SERVER_PORT
});      

app.use(cors());

app.listen(process.env.REACT_APP_SERVER_PORT, ()=>{
    console.log(`App server now listening on port ${process.env.REACT_APP_SERVER_PORT}`)
});

app.get('/test', (req, res)=> {
    const { table } = req.query;

    pool.query(`select * from ${table}`, (err, results) => {
        if(err){
            return res.send(err);
        }
        else{
            return res.send(results)
        }
    })
})
