import express from 'express';
const app = express();
app.get('/', (req, res) => {
    res.send("Graph QL is amazing")
});

app.listen(2020, () => console.log(" runnning server at http://localhost:2020/graphql"))