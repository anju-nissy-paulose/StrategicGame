import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


function BookView() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchBook() {
      try {
        const response = await axios.get(`/gamebooks/${id}`);
        setBook(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchBook();
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h2>{book.name }</h2>
          <p>Author: {book.author}</p>
          <p>Description: {book.description}</p>
        </>
      )}
    </div>
  );
}

export default BookView;
