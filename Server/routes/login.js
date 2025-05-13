const loginRouter = require('express').Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { SECRET } = require('../utils/config');

loginRouter.post('/', async (req, res) => {
    const { username, password } = req.body;
    console.log(username)
    const user = await User.findOne({ username });
    const passwordCorrect = user === null ? false : await bcrypt.compare(password, user.passwordHash);
    
    if(!(user && passwordCorrect)) {
        return res.status(400).send("Incorrect password or username");
    }

    const userForToken = {
        username: user.username,
        id: user._id
    };

    const token = jwt.sign(userForToken, SECRET);
    res.status(200).json({token, username: username, id: user._id});
})

module.exports = loginRouter;