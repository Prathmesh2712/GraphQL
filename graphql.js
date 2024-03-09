import { gql } from '@apollo/client'

export const loginUserMutation = gql`
  mutation Login($email: String!, $password: String!) {
    login(input: { email: $email, password: $password }) {
      token
      email
    }
  }
`
export const registerUserMutation = gql`
  mutation createUser(
    $email: String!
    $password: String!
    $fullName: String!
    $phoneNo: String!
  ) {
    createUser(
      input: {
        email: $email
        password: $password
        fullName: $fullName
        phoneNo: $phoneNo
      }
    ) {
      status
      error
    }
  }
`
