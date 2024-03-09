import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client/core'

import { loginUserMutation, registerUserMutation } from './graphql' // Define your GraphQL mutations and queries

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql', // Replace with your actual GraphQL API endpoint
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})

export async function createUser(email, password, fullName, phoneNo) {
  try {
    const response = await client.mutate({
      mutation: registerUserMutation,
      variables: { email, password, fullName, phoneNo },
    })
    return response
  } catch (ex) {
    return { status: 'error', error: ex }
  }
}

export async function loginUser(email, password) {
  try {
    const response = await client.mutate({
      mutation: loginUserMutation,
      variables: { email, password },
    })
    return response.data.login
  } catch (ex) {
    return { status: 'error', error: ex }
  }
}

// export async function getAllEmail() {
//   try {
//     const response = await client.query({
//       query: getAllEmailQuery,
//       context: {
//         headers: {
//           token: sessionStorage['token'],
//         },
//       },
//     })
//     console.log(response.data)
//     return response.data
//   } catch (ex) {
//     return { status: 'error', error: ex }
//   }
// }
