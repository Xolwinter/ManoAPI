const { v4: uuidv4 } = require('uuid');
uuidv4();

const db = require('../persistence');

module.exports = async (req, res) => {
    console.log('req : ', req)

    try{
        if(typeof(req.body.name) == "undefined"){
              console.log("req.body.name undefined") 
        }
    }catch(err){
        console.log('[ERROR] addTeam')
        res.status(404).send('Your name is wrong')
        return
    }
    

    const team = {
        id: uuidv4(),
        name: req.body.name,
    };
    await db.storeTeam(team);

    console.log('[DATABASE] Storing ' + req.body.name + ' in database.' )
    res.send(team)
}