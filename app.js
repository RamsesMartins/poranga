const app = require('express')()
const handlebars = require('express-handlebars')
//CONFIGURAÇÕES
    //Public
        app.use(require('express').static('public'))

    //Handlebars
        app.engine('hbs',handlebars.engine({extname: "hbs"}))
        app.set('view engine', 'hbs')
//ROTAS
    app.get('/', (req, res)=>{
        res.render('home')        
    })

//LISTEN
    app.listen(8000, ()=>{
        console.log('http:localhost:8000')
    })