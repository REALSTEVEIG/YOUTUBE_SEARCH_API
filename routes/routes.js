const express = require('express')
const router = express.Router()

const {search, 
    //search2,   search3
} = require('../controllers/controller')

router.route('/search').get(search)
//router.route('/search2').get(search2)
//router.route('/search3').get(search3)

module.exports = router