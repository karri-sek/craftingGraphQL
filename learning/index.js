import express from 'express';
import graphqlHTTP from 'express-graphql';
import {schema} from './schema';

const app = express();
app.get('/', (req, res) => {
    res.send("Graph QL is amazing")
});


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

app.listen(2020, () => console.log(" runnning server at http://localhost:2020/graphql"))