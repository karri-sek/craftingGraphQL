import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();
app.get('/', (req, res) => {
    res.send("Graph QL is amazing")
});


const root = { friend: () => {
    return {
        id: 1,
        firstName: 'sekhar',
        lastName: 'Karri',
        email: 'b@g.com',
        language: 'Eng'
    }
}}

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(2020, () => console.log(" runnning server at http://localhost:2020/graphql"))