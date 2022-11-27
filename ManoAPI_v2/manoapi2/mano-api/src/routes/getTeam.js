const db = require('../persistence');

module.exports = async (req, res) => {
    const teams = await db.getTeams();
    res.send(teams)
    console.log('[DATABASE] Showing team in database.');
}