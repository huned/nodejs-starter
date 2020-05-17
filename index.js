require('dotenv').config()
const debug = require('debug')('index.js')

debug('this is some sample debugging output')
process.stdout.write('put your code in ./index.js\n')
