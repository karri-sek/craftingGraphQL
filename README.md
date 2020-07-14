# craftingGraphQL
### how to start
..* Step 1: Go the root directory learning
..* Step 2: type ```yarn start``` on command line.
..* Step 3: Go to the browser and access the URL ```http://localhost:2020/graphql```

Graph Graph QL 

Query for alias:
```{
  one:getOneFriend(id: "5eeb481397f0841e53575447") {
    firstName
    lastName
  }
  secondWithAge:getOneFriend(id: "5eebdb12f1e80610204e9276") {
    firstName
    lastName
    age
  }
}
```
Fragment: 
```
{
  one:getOneFriend(id: "5eeb481397f0841e53575447") {
   ...friendFragment
  }
  secondWithAge:getOneFriend(id: "5eebdb12f1e80610204e9276") {
    ...friendFragment,
    language
  }
}

fragment friendFragment on Friend{
  firstName,
  lastName
}
```
createFriend
```mutation {
  createFriend(input: {firstName: "first", lastName: "babu", gender: FEMALE, language: "english", email: "b@b.com"}) {
    id
    firstName
    lastName
  }
}
```
getOneFriend
```
query {
  getOneFriend(id:"fe63667f08800a72acbe"),{
    firstName,
    lastName
  }
}
```
```
{
  getAliens {
    id,
    firstName
  }
}
```
update friend:
```
mutation{
  updateFriend(input:{
    id: "5eeb481397f0841e53575447",
    lastName: "Updated Second Name",
    firstName: "Updated first name",
    gender: FEMALE,
    language: "english",
    email: "b@b.com"
  }){
    id, 
    firstName,
    lastName
  }
}

mutation{
  deleteFriend(id:"5eeb4820becb671e6add0b0a")
}
mutation{
  updateFriend(input:{
    id: "5eeb481397f0841e53575447",
    lastName: "Updated Second Name",
    firstName: "Updated first name",
    gender: FEMALE,
    language: "english",
    email: "b@b.com"
  }){
    id, 
    firstName,
    lastName
  }
}

mutation{
  createFriend(input:{
    firstName: "firstRecord",
    lastName: "second",
    gender: FEMALE,
    language: "english",
    email: "b@b.com"
  }){
    id, 
    firstName,
    lastName
  }
}
```


