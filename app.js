const express = require('express')
const app = express()
const port = process.env.PORT || 5555
const query = require('./queries/jobs')
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res, next) => query.getAllJobs().then(data => res.json({ data })))
app.post('/', (req, res, next) => query.createNewJob(req.body).then(data => res.json({ data })))

app.listen(port, () => console.log(`got you on ${port}`))
