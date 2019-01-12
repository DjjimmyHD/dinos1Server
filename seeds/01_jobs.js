exports.seed = (knex, Promise) => {
  return knex('jobs').del()
    .then(() => {
      return knex('jobs').insert([
        { title: 'Demolitions Manager', pay: '$50,000 per year', description: 'Please destroy things for us.', interested: ['T-Rex'] },
        { title: 'Tree Trimming Specialist', pay: '$23.50 per hour', description: 'Responsible for keeping trees and bushes well trimmed and away from structures. Must be able to dispose of trimmings.', interested: ['Utahraptor', ''] },
        { title: 'Dog Walker', pay: '$15 per hour', description: 'Looking for a dog lover to take our furry friends out three times a day.', interested: ['Dromiceiomimus'] },
        { title: 'Philosopher', pay: '24% equity', description: 'An ink sees a colombia as a boxlike composition. We can assume that any instance of a currency can be construed as a charming macaroni. If this was somewhat unclear, barish lyrics show us how himalayans can be fathers. A statement can hardly be considered a backless denim without also being a feeling.', interested: ['T-Rex', 'Utahraptor'] }
      ])
    })
}
