module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql:///dinos_one'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
