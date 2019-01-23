
exports.up = (knex, Promise) => {
  return knex.schema.createTable('jobs', (job) => {
    job.increments()
    job.string('title').notNullable()
    job.string('pay').notNullable()
    job.text('description').notNullable()
    job.specificType('interested', 'text[]')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('jobs')
}
