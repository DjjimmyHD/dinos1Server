const express = require('express')
const app = express()
const port = process.env.PORT || 5555
const query = require('./queries/jobs')
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res, next) => query.getAllJobs().then(job => res.json({ job })))

app.listen(port, () => console.log(`got you on ${port}`))
