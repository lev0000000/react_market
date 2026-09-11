/**
 * Helpers methods
 */


/** 
 * @param {*} userId 
 * @param {*} password 
 * @returns 
 */
const jwtGenerator = (userId, password, role = "USER") => (require('jsonwebtoken').sign({ userId, password, role }, process.env.SECRET_KEY, { expiresIn: '24h' }))

const jwtDecoder = (token) => (require('jsonwebtoken').verify(token,process.env.SECRET_KEY))

module.exports = {
    jwtGenerator,
    jwtDecoder
}