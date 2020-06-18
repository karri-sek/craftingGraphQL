import { resolvers } from './resolvers';
import { makeExecutableSchema } from '@graphql-tools/schema';

const typeDefs = `
type Friend{
    id: ID
    firstName: String
    lastName: String
    gender: String
    language: String
    email: String
    age: Int
    contacts:[contact]
}

type Alien {
    id: ID,
    firstName: String
    lastName: String
    planet: String
}
 
input FriendInput {
    id: ID
    firstName: String
    lastName: String
    gender: Gender
    language: String
    email: String
    age: Int,
    contacts: [contactsInput]
}
type contact {
    firstName:String
    lastName: String
}
input contactsInput {
    firstName: String
    lastName: String
}
type Mutation {
    createFriend(input: FriendInput): Friend
    updateFriend(input: FriendInput): Friend
    deleteFriend(id: ID!): String
} 
enum Gender {
    MALE
    FEMALE
    OTHER
}
 type Query{
     getFriend(id:ID): Friend
     getAliens: [Alien]
     getOneFriend(id: ID!): Friend
 }
 `;

export const schema = makeExecutableSchema({ typeDefs, resolvers });