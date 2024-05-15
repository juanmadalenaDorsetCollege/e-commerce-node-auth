const userModel = require('../database/Models/UserModel')
const jwt = require('../adapters/jwt.adapter')
const bcrypt = require('../adapters/bcrypt.adapter')

const login = async (username, password) => {

    if (!username || !password) {
        throw 'Invalid credentials'
    }

    const user = await userModel.findOne({
        username,
    })

    if( !user || !bcrypt.comparePassword(password, user.password) ) {
        throw 'Invalid credentials'
    }

    const token = jwt.createToken(user)

    return {
        user: user.username,
        token
    }
}

const register = async ({ username, password, confirmPassword  }) => {

    if (!username || !password || !confirmPassword) {
        throw 'Invalid credentials'
    }

    if (password !== confirmPassword) {
        throw 'Passwords do not match'
    }

    const isUserExist = await userModel.findOne({ username })
    console.log(isUserExist)
    if (isUserExist) {
        throw 'Username already exists'
    }
    console.log('here', username, password)
    const newUser = await new userModel({ username, password }).save()

    const token = jwt.createToken(newUser)

    return {
        user: newUser.username,
        token
    }
}

module.exports = {
    login, register
}