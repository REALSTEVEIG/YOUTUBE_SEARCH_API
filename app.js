require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const router = require('./routes/routes')
const helmet = require('helmet')
const cors = require('cors')
const xss = require('xss-clean')
const expressRateLimmitter = require('express-rate-limit')
const swaggerUI = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerDocument = YAML.load('./swagger.yaml')

app.set('trust proxy', 1)
app.use(helmet())
app.use(cors())
app.use(xss())
app.use(expressRateLimmitter({windowMs : 60 * 1000, max : 60}))

app.get('/', (req, res) => {
    res.send(`<h1>YouTube API</h1><a href='/api-docs'>Documentation</a>`)
  })
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))
app.use('/api/v1', router)

app.listen(port, () => {console.log(`Server is listening on port ${port}`)})