import { useQuery, gql, useMutation } from "@apollo/client";

import { AuthorList } from './components/AuthorList';
import { BookTable } from "./components/BookTable";

const APP_QUERY = gql`
  query App {
    authors { id firstName lastName }
    books {
      id isbn title category price quantity
      author { firstName lastName }
    }
  }
`;

const REMOVE_BOOK_MUTATION = gql`
  mutation RemoveBook($bookId: ID) {
    removeBook(bookId: $bookId) {
      id
      title
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(APP_QUERY);

  const [ mutateRemoveBook ] = useMutation(REMOVE_BOOK_MUTATION);

  const deleteBook = async (bookId) => {

    await mutateRemoveBook({
      variables: {
        bookId,
      },
      refetchQueries: [ { query: APP_QUERY } ],
    });

    console.log("book deleted");

  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <AuthorList authors={data.authors} />
      <BookTable books={data.books} onDeleteBook={deleteBook} />
    </div>
  );
}

export default App;
