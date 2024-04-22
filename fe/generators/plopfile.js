const { networkService } = require('./settings')

module.exports = function (plop) {
  plop.setGenerator('network service', networkService)
}
