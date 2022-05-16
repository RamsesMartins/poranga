const app = require('express')()
const handlebars = require('express-handlebars')
//CONFIGURAÇÕES
    app.engine('handlebars',handlebars.engine())
    app.set('view engine', 'handlebars')
//ROTAS
    app.get('/', (req, res)=>{
        res.render('home')
    })

//LISTEN
    app.listen(8000, ()=>{
        console.log('http:localhost:8000')
    })