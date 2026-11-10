const db = require('../models/index');

async function getALIkomik(req, res) {
    try {
        const komik = await db.komik.findAll(); 
        res.status(200).json(komik);
    } catch (err) {
        console.error('Error retrieving komik:', err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function getkomikById(req, res) {
    const { id } = req.params;
    try {
        const komik = await db.komik.findByPk(id);
        if (!komik) {
            return res.status(404).json({ message: 'Komik tidak ditemukan' });
        }
        res.status(200).json(komik);
    } catch (err) {
        console.error('Error retrieving komik by id:', err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function createkomik(req, res) {
    try {
        const newKomik = await db.komik.create(req.body);
        res.status(201).json(newKomik);
    } catch (err) {
        console.error('Error creating komik:', err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function updatekomik(req, res) {
    const { id } = req.params;
    try {
        const [updated] = await db.komik.update(req.body, { where: { id } });
        if (!updated) {
            return res.status(404).json({ message: 'Komik tidak ditemukan' });
        }
        res.status(200).json({ message: 'Komik berhasil diupdate' });
    } catch (err) {
        console.error('Error updating komik:', err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function deletekomik(req, res) {
    const { id } = req.params;
    try {
        const deleted = await db.komik.destroy({ where: { id } });
        if (!deleted) {
            return res.status(404).json({ message: 'Komik tidak ditemukan' });
        }
        res.status(200).json({ message: 'Komik berhasil dihapus' });
    } catch (err) {
        console.error('Error deleting komik:', err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    getALIkomik,
    getkomikById,
    createkomik,
    updatekomik,
    deletekomik
};
