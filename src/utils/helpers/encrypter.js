const bcrypt = require('bcrypt')

module.exports = class Encrypter {
  async compare (value, hashed) {
    const isValid = await bcrypt.compare(value, hashed)
    return isValid
  }
}
