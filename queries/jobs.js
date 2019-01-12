const db = require('../DBConnection/connection')

const getAllJobs = () => db('dinos_one').select().from('jobs')

module.exports = {
  getAllJobs
}
