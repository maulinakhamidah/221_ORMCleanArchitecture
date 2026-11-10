module.exports = (sequelize, DataTypes) => {
    const komik = sequelize.define("komik", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    });

    return komik;
};
