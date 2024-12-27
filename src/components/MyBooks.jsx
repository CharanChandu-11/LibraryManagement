  import React from 'react';
  import { BookCard } from './BookCard';
  import { useLibrary } from '../context/LibraryContext';

  export function MyBooks() {
    const { books, currentUser } = useLibrary();
    const myBooks = books.filter(book => book.borrowerId === currentUser?.id);

    return (
      <div>
        <h2 className="text-2xl font-bold mb-6">My Borrowed Books</h2>
        {myBooks.length === 0 ? (
          <div className="flex justify-center items-center">
            <div className="text-center">
              <p className="text-gray-600 mb-4">You haven't borrowed any books yet.</p>

            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {myBooks.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        )}
      </div>
    );
  }
