let express = require('express')// express library similar to python import
let router = express.Router()

router.get ('/', function(req,res, next){
    res.json({'message': 'Hello ITEC 2560 web programmers '})// json object hello
})

module.exports = router