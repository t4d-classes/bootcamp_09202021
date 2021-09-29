import { gql } from 'apollo-server-express';

// gql is a tagged template literal
export const typeDefs = gql`
  type Query {
    message: String
    colors: [String]
    person: Person
    authors: [Author]
    author(authorId: ID): Author
    books: [Book]
  }

  type Person {
    id: ID
    firstName: String
    lastName: String
    age: Int
  }

  type Author {
    id: ID
    firstName: String
    lastName: String
    phoneNumber: String
    books: [Book]
  }

  type Book {
    id: ID
    isbn: String
    title: String
    authorId: ID
    category: String
    price: Float
    quantity: Int
    author: Author
  }
`;


