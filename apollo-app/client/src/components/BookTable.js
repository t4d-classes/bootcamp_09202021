export const BookTable = ({ books, onDeleteBook: deleteBook }) => {

  return (
    <table>
      <thead>
        <tr>
          <th>Isbn</th>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Actions</th>
        </tr>
      </thead>
      {books.map(book => <tr key={book.id}>
        <td>{book.isbn}</td>
        <td>{book.title}</td>
        <td>{book.author.firstName} {book.author.lastName}</td>
        <td>{book.category}</td>
        <td>{book.price}</td>
        <td>{book.quantity}</td>
        <td>
          <button type="button"
            onClick={() => deleteBook(book.id)}>Delete</button>
        </td>
      </tr>)}
    </table>
  )


};