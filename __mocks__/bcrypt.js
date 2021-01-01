module.exports = {
  isValid: true,
  value: '',
  hashed: '',

  async compare (value, hashed) {
    this.value = value
    this.hashed = hashed
    return this.isValid
  }
}
