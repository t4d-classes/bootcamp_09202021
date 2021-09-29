import { gql } from 'apollo-server-express';

// gql is a tagged template literal
export const typeDefs = gql`
  type Query {
    message: String
    colors: [String]
    person: Person
    authors: [Author]
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
  }
`;


