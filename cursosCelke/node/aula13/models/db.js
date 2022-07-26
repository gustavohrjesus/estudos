const Sequelize = require("sequelize")

const sequelize = new Sequelize('celke', 'root', 'Sumato17#', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}