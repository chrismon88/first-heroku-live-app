let express = require('express')// express library similar to python import
let router = express.Router()

router.get ('/', function(req,res, next){
    res.json({'message': 'Good morning programmers '})// json object hello
})

module.exports = router