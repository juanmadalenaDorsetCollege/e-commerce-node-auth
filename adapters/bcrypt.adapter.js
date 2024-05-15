const bcrypt = require('bcrypt')

const hashPassword = async (password) => {
    return await bcrypt.hash(password, 10)
}

const comparePassword = (plaintext, hash) => {
    try{
        return bcrypt.compareSync(plaintext, hash)
    } catch (error) {
        return false
    }
}

module.exports = {
    hashPassword, comparePassword
}