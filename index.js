require('dotenv').config()
const debug = require('debug')('index.js')

if (require.main === module) {
  debug('called directly')
} else {
  debug('required as a module')
}

process.stdout.write('put your code in ./index.js\n')
module.exports = {}
