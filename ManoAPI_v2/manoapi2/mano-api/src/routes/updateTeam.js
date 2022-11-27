const db = require('../persistence');

//Ajouter les index dans req.paramas.id

module.exports = async (req, res) => {
    console.log(req)
    const team = await db.getTeam(req.body.id)

    await db.updateTeam(req.body.id,{
        name: req.body.name
    });

    const newteam = await db.getTeam(req.body.id)
    console.log('[DATABASE] Team ' + team.name + ' updated to ' + newteam.name)
    res.send(newteam);
};