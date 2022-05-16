const Sequelize = require('sequelize')
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: __dirname+'/redesocial.db'
})
const Postagem = sequelize.define('Postagens', {
    Texto:{
        type: Sequelize.STRING
    }
})
Postagem.sync()