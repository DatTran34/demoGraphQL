const resolvers = {
    Query: {
        books: () => [
            {
                id: 1,
                name: 'Rich Dad Poor Dad',
                genre: 'Adventure'
            },
            {
                id: 2,
                name: 'Elon Musk',
                genre: 'Education'
            },
            {
                id: 3,
                name: 'Alchemist',
                genre: 'Fiction'
            },
        ]
    }
}

module.exports = resolvers  