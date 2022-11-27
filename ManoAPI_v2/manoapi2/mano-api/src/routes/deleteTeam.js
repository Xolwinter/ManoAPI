const db = require('../persistence');

module.exports = async (req, res) => {
    await db.removeTeam(req.body.id);
    console.log('[DATABASE] Team : ' + req.body.id + ' deleted form database.')
    //res.sendStatus(200)
    res.send({status:"sucess"})
}