const app = require('express')();
const mongoose = require('./config/db')
const signs = require('./api/signs')
const User = require('./api/users')

app.get("/signos/:name/:birthdate", (req, res) => {
    const starSign = signs.getStarSign(req.params.birthdate)
    const user = new User({starSign, name: req.params.name, birthdate: req.params.birthdate})

    user.save((err) => {
        if(err) res.status(500).send(err)
    })

    res.json({
        starSign
    })
})

app.listen(3000, () => console.log("Backend running"))
