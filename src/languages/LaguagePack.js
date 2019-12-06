import laguageFormat from './LaguagePack.format'

function LanguagePack() {
  this.format = JSON.parse(JSON.stringify(laguageFormat))
}

LanguagePack.prototype.setInitialFormat = function(inittialFormat) {
  this.format = { ...this.format, ...inittialFormat }
}

LanguagePack.prototype.setType = function(type) {
  this.format.type = type
}

export default LanguagePack
