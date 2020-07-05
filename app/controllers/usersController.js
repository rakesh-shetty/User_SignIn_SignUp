const User = require('../models/user')
const { compareSync } = require('bcryptjs')


module.exports.list = (req, res) => {
    User.find()
        .then(users => {
            res.json(users)
        })
        .catch(err => {
            res.json(err)
        })

}

module.exports.register = (req, res) => {
    const body = req.body
    const user = new User(body)
    user.save()
        .then(user => {
            res.json(user)
        })
        .catch(err => {
            res.json(err)
        })

}

module.exports.login = (req, res) => {
    const body = req.body
    console.log(body)
    User.findUserByCredential(body.email, body.password)
        .then(user => {
            return user.generateToken()
        })
        .then(token => {
            console.log(token)
            res.json({token})
            
        })
        .catch(err => {
            res.json(err)
        })

}

module.exports.account = (req, res) => {
    const { user } = req
    res.json(user)
}
