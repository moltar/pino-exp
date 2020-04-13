const pino = require('pino')()
const pinoCaller = require('pino-caller')(pino)

pinoCaller.info('info1')
