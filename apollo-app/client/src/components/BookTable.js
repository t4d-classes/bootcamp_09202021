export const BookTable = ({ books }) => {

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
        </tr>
      </thead>
      {books.map(book => <tr key={book.id}>
        <td>{book.isbn}</td>
        <td>{book.title}</td>
        <td>{book.author.firstName} {book.author.lastName}</td>
        <td>{book.category}</td>
        <td>{book.price}</td>
        <td>{book.quantity}</td>
      </tr>)}
    </table>
  )


};