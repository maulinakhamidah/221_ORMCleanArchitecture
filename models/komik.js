module.exports = (sequelize, DataTypes) => {
    const komik = sequelize.define("komik", {
        id: {
            type: DataTypes.INTEGER,
            primarykey: true,
            autoIncrement: true

        }
    })
}