const express = require('express')
const app = express()
const cors = require('cors');
const db = require('./src/persistence');
const getTeam = require('./src/routes/getTeam');
const addTeam = require('./src/routes/addTeam');
const updateTeam = require('./src/routes/updateTeam');
const deleteTeam = require('./src/routes/deleteTeam');

app.use(express.json());
//app.use(express.static(__dirname + '/static'));
app.use(cors())

app.get('/team', getTeam)
app.post('/team', addTeam);
app.put('/team', updateTeam)
app.delete('/team', deleteTeam)

db.init().then(() => {
    app.listen(3005, () => console.log('ManoAPI listening on port 3005'));
}).catch((err) => {
    console.error(err);
    process.exit(1);
});

const gracefulShutdown = () => {
    db.teardown()
        .catch(() => {})
        .then(() => process.exit());
};

process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);
process.on('SIGUSR2', gracefulShutdown); // Sent by nodemon
