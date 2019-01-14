const db = require('../DBConnection/connection')

const getAllJobs = () => db('dinos_one').select().from('jobs')
const createNewJob = (job) => db('jobs').insert(job).returning('*')

module.exports = {
  getAllJobs,
  createNewJob
}
