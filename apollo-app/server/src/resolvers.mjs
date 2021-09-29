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
    },
    async author(_, args) {
      const authorId = encodeURIComponent(args.authorId);
      return fetch(`http://localhost:5050/authors/${authorId}`)
        .then(res => res.json());
    },
    async books() {
      const res = await fetch('http://localhost:5050/books');
      const books = await res.json();
      return books;
    }
  },
  Author: {
    books(author) {
      const authorId = encodeURIComponent(author.id);
      return fetch(`http://localhost:5050/books?authorId=${authorId}`)
        .then(res => res.json());      
    }
  },
  Book: {
    // if using the default resolver it can be omitted
    // id(book) { return book.id; },
    author(book) {
      const authorId = encodeURIComponent(book.authorId);
      return fetch(`http://localhost:5050/authors/${authorId}`)
        .then(res => res.json());
    }
  }
};
