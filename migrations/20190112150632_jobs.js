
exports.up = (knex, Promise) => {
  return knex.schema.createTable('jobs', (job) => {
    job.increments()
    job.string('title')
    job.string('pay')
    job.text('description')
    job.specificType('interested', 'text[]')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('jobs')
}
