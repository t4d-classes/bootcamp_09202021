import { useQuery, gql } from "@apollo/client";

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

function App() {
  const { loading, error, data } = useQuery(APP_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <AuthorList authors={data.authors} />
      <BookTable books={data.books} />
    </div>
  );
}

export default App;
