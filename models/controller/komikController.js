const db = require('../models/index');

async function getALIkomik(req, res) {
    try{
        const komik = await db.komik.findALL();
        res.status(200).json(komik);
    } catch (err) {
        console.error('Error retrieving komik:', err.message);
        res.status(500).json({ error: 'Internal server error' });

    }
}

async function getkomikById( req, res) {
    const { id } = req.params;
    