import { gql } from '@apollo/client'

export const REGISTER_USER = gql`
  mutation signup(
    $email: String!
    $password: String!
    $fullName: String!
    $phoneNo: String!
  ) {
    registerUser(
      email: $email
      password: $password
      fullName: $fullName
      phoneNo: $phoneNo
    ) {
      status
    }
  }
`

export const LOGIN_USER_MUTATION = gql`
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      status
      token
      email
      id
      error
    }
  }
`

export const GET_EMAIL = gql`
  mutation getEmail {
    getEmail {
      status
      data
    }
  }
`

export const ADD_BLOG_MUTATION = gql`
  mutation addingBlog(
    $title: String!
    $content: String!
    $category: String!
    $authorization: String!
  ) {
    addingBlog(
      title: $title
      content: $content
      category: $category
      authorization: $authorization
    ) {
      status
      data {
        title
        id
      }
    }
  }
`

export const GET_USER_DETAILS = gql`
  mutation GetUserDetails($authorization: String!) {
    getUserDetails(authorization: $authorization) {
      status
      data {
        phoneNo
        email
        fullName
      }
    }
  }
`

//MyBlog.jsx

export const GET_MY_BLOG = gql`
  mutation getMyblog($authorization: String!) {
    getMyblog(authorization: $authorization) {
      status
      data {
        id
        title
        content
        category
        isPublic
      }
    }
  }
`

export const SET_BLOG_PUBLIC = gql`
  mutation SetBlogPublic($id: Float!, $authorization: String!) {
    setBlogPublic(id: $id, authorization: $authorization) {
      status
      datas {
        id
        title
        isPublic
      }
    }
  }
`

export const SET_BLOG_PRIVATE = gql`
  mutation SetBlogPrivate($id: Float!, $authorization: String!) {
    setBlogPrivate(id: $id, authorization: $authorization) {
      status
      datas {
        id
        title
        isPublic
      }
    }
  }
`
export const DELETE_BLOG = gql`
  mutation deleteBlog($id: Float!, $authorization: String!) {
    deleteBlog(id: $id, authorization: $authorization) {
      status
      datas {
        id
      }
    }
  }
`

export const UPDATE_BLOG = gql`
  mutation UpdateBlog(
    $id: Float!
    $title: String!
    $content: String!
    $category: String!
  ) {
    updateBlog(id: $id, title: $title, content: $content, category: $category) {
      status
      datas {
        id
        title
        content
        category
      }
    }
  }
`

export const GET_BLOG_BY_ID = gql`
  mutation GetBlogById($id: Float!) {
    getBlogById(id: $id) {
      status
      data {
        title
        content
        category
      }
    }
  }
`
export const GET_PUBLIC_BLOGS = gql`
  mutation {
    getPublicBlogs {
      status
      data {
        id
        title
        content
        category
      }
    }
  }
`
export const SEARCH_BLOG = gql`
  mutation SearchBlog($text: String!) {
    searchBlog(text: $text) {
      status
      data {
        id
        title
        content
        category
        isPublic
        isShared
        createdTimestamp
      }
    }
  }
`

export const GET_ALL_BLOGS = gql`
  mutation {
    getAllBlogs {
      status
      data {
        id
        title
        category
        content
      }
    }
  }
`

//Share Blog related

export const SHARE_BLOG_MUTATION = gql`
  mutation ShareBlog(
    $blog_id: Float!
    $email: String!
    $authorization: String!
  ) {
    shareBlog(
      blog_id: $blog_id
      shared_with_user_email: $email
      authorization: $authorization
    ) {
      status
    }
  }
`

export const VIEW_SHARED_BLOG_MUTATION = gql`
  mutation VIEW_SHARED_BLOG_MUTATION($authorization: String!) {
    viewSharedBlog(authorization: $authorization) {
      status
      data {
        shared_by_user_email
        blog_id
        shared_with_user_email
        title
        category
        createdTimestamp
      }
    }
  }
`
