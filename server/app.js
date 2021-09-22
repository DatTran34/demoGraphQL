const express = require('express')
const {ApolloServer} = require('apollo-server-express') 


const startServer = async () => {
    //Load shcema & resolvers
const typeDefs = require('./schema/schema')
const resolvers = require('./resolver/resolver')


    const server = new ApolloServer({
        typeDefs,
        resolvers
    })
    await server.start()
    const app = express()
    server.applyMiddleware({app})
    await new Promise( resolve => app.listen({port:4000 } , () => {
        console.log(`Server ready at http://locakhost:4000${server.graphqlPath}`)
    }))
    return {server, app}
}
startServer()

