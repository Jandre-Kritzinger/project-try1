const { createLogger, transports, format} = require('winston')
require('winston-mongodb')
const logger = createLogger({
    transports: [
        new transports.Console({
            level: 'info',
            format: format.combine(format.timestamp(), format.json())
        }),
        new transports.MongoDB({
            level: 'error',
            db: process.env.DATABASE_URL,
            options: {useUnifiedTopology: true},
            collection: '_logging',
            format: format.combine(format.timestamp(), format.json())
        })
    ]
})

module.exports = logger