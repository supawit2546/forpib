const express = require('express')
const router = express.Router()

const { register, login } = require('../Controllers/auth')



// http://localhost:5000/api/register
router.post('/register', register)
router.post('/login', login)
router.get('/login',(req,res) => {
    res.send('ได้โปรดดดดดด')
})





module.exports = router