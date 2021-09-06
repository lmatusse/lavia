//const { Router } = require('express')
//const router = Router()

//const routerController = require('../controllers/router.controller')

router.get('/', function(req,res){
    res.render('../views/pages/index')
})

//module.exports = router