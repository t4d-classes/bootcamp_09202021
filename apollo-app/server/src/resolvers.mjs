import fetch from 'node-fetch';

export const resolvers = {
  Query: {
    message() {
      return 'Welcome to React and Apollo!';
    },
    colors() {
      return [
        'red', 'blue', 'green'
      ];
    },
    person() {
      return {
        id: 1,
        firstName: 'Bob',
        lastName: 'Smith',
        age: 21,
      };
    },
    // authors() {
    //   return fetch('http://localhost:5050/authors')
    //     .then(res => res.json());
    // },
    async authors() {
      const res = await fetch('http://localhost:5050/authors');
      const authors = await res.json();
      return authors;
    }
  },
};
