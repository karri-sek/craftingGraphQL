import { buildSchema } from 'graphql';

const schema = buildSchema(`
type Friend{
    id: ID
    firstName: String
    lastName: String
    gender: String
    language: String
    email: String
    age: Int
}
 
input FriendInput {
    id: ID
    firstName: String
    lastName: String
    gender: Gender
    language: String
    email: String
    age: Int
}

type Mutation {
    createFriend(input: FriendInput): Friend
} 
enum Gender {
    MALE
    FEMALE
    OTHER
}
 type Query{
     getFriend(id:ID): Friend
 }`)

export default schema;