#!/usr/bin/env node

import 'dotenv/config'
import debugModule from 'debug'
const debug = debugModule('index.js')

// NOTE: YUCK. See https://github.com/nodejs/modules/issues/274
const isCalledDirectly = () => import.meta.url === `file://${process.argv[1]}`

if (isCalledDirectly()) {
  debug('called directly')
} else {
  debug('required as a module')
}

// TODO: Put your code here
process.stdout.write('put your code in ./index.js\n')

export default () => {
  // TODO: Also put your code here
}
