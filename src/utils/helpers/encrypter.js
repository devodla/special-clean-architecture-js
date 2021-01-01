const bcrypt = require('bcrypt')
const { MissingParamError } = require('../errors')

module.exports = class Encrypter {
  async compare (value, hashed) {
    if (!value) {
      throw new MissingParamError('value')
    }
    if (!hashed) {
      throw new MissingParamError('hashed')
    }
    const isValid = await bcrypt.compare(value, hashed)
    return isValid
  }
}
