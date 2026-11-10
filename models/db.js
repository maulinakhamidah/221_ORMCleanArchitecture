const db = require('../models/index');

async function connectDatabase() {
    try{
        await db.Sequelize.authenticate();
        console.log('Database connected successfully.');

        await db.Sequelize.sync();
        console.log('Database synchronnized successfully.');

    } catch (error) {

    }
}