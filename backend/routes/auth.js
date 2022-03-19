const {
    login,
    register,
    getAllUsers,
    setAvatar,
    logout
} = require('../controllers/user')
const express = require('express')

const router = express.Router()

router.post('/login', login)
router.post('/register', register)
router.get('/allusers/:id', getAllUsers)
router.post('/setavatar/:id', setAvatar)
router.get('/logout/:id', logout)


module.exports = router
