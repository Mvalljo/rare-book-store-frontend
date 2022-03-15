export default function BookRow({ book }) {

    function goToBook(bookId) {
      document.location.replace(`/books/${bookId}`);
    }
    return (
      <tr onClick={() => goToBook(book.bookId)} key={book.bookId}>
        <td>{book.bookId}</td>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>{book.genre}</td>
        <td>{book.yearWritten}</td>
        <td>{book.edition}</td>
        <td>{book.binding}</td>
        <td>{book.bookCondition}</td>
        <td>${book.price}</td>
      </tr>
    );
}