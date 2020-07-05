const express = require('express')
const router = express.Router()
const usersController = require('../app/controllers/usersController')
const autheticateUser = require('../app/middlewares/authentication')

router.post('/users/signup', usersController.register)
router.post('/users/login', usersController.login)

module.exports = router
