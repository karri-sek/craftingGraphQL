import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();
app.get('/', (req, res) => {
    res.send("Graph QL is amazing")
});


class Friend{
    constructor(id, {firstName, lastName, gender, language, email}){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.language = language
        this.email = email
    }
}
const friendDatabase = {}
const root = {
    friend: () => {
        return {
            id: 1,
            firstName: 'sekhar',
            lastName: 'Karri',
            emails: 'email@email.com',
            language: 'Eng'
        }
    },
    createFriend: ({input}) =>{
        let id = require('crypto').randomBytes(10).toString('hex');
        friendDatabase[id] = input;
        return new Friend(id, input);
    }
}

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(2020, () => console.log(" runnning server at http://localhost:2020/graphql"))