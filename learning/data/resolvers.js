import {Friends} from './dbConnectors';

export const resolvers = {
    Query: {
        getFriend: (_, { id }) => {
            return friendDatabase[id]

        }
    },
    Mutation: {
        createFriend: (root, { input }) => {
            const newFriend = new Friends({
                firstName: input.firstName,
                lastName: input.lastName,
                gender: input.gender,
                language: input.language,
                age: input.age,
                contacts:input.contacts,
                email: input.email
            });
            newFriend.id = newFriend._id;
            return new Promise((resolve, reject)=>{
                newFriend.save((err)=>{
                    if(err) reject("error",err)
                    else resolve(newFriend)
                })
            });
        },
    },
}