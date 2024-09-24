import React, { useEffect, useState } from 'react';
import axiosInstance, { setAuthHeaders } from './axiosConfig';

const Books = ({ email, password }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setAuthHeaders(email, password);
        const response = await axiosInstance.get('/books');
        console.log("response", response)
        setBooks(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching books:', err);
        setError('Failed to load books');
        setLoading(false);
      }
    };

    fetchBooks();
  }, [email, password]);

  if (loading) {
    return <div>Loading books...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Available Books</h2>
      {books.length === 0 ? (
        <p>No books available at the moment.</p>
      ) : (
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              {book.title} by {book.author} - ${book.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Books;