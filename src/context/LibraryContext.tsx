import React, { createContext, useContext, useState, useEffect } from 'react';
import { Book } from '../types/book';
import { User } from '../types/user';
import { books as initialBooks } from '../data/books';

interface LibraryContextType {
  books: Book[];
  currentUser: User | null;
  searchBooks: (query: string) => void;
  borrowBook: (bookId: string) => void;
  returnBook: (bookId: string) => void;
  filteredBooks: Book[];
}

const LibraryContext = createContext<LibraryContextType | undefined>(undefined);

export function LibraryProvider({ children }: { children: React.ReactNode }) {
  const [books, setBooks] = useState<Book[]>(initialBooks);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>(initialBooks);
  const [currentUser] = useState<User>({
    id: '1',
    name: 'bhavya',
    email: 'bhavya@gmail.com',
    borrowedBooks: []
  });

  const searchBooks = (query: string) => {
    const lowercaseQuery = query.toLowerCase();
    const filtered = books.filter(book => 
      book.title.toLowerCase().includes(lowercaseQuery) ||
      book.author.toLowerCase().includes(lowercaseQuery) ||
      `Shelf ${book.shelf} Row ${book.row}`.toLowerCase().includes(lowercaseQuery)
    );
    setFilteredBooks(filtered);
  };

  const borrowBook = (bookId: string) => {
    setBooks(prevBooks => prevBooks.map(book => {
      if (book.id === bookId && book.available) {
        const dueDate = new Date();
        dueDate.setDate(dueDate.getDate() + 14); // 2 weeks from now
        return {
          ...book,
          available: false,
          dueDate: dueDate.toISOString().split('T')[0],
          borrowerId: currentUser.id
        };
      }
      return book;
    }));
  };

  const returnBook = (bookId: string) => {
    setBooks(prevBooks => prevBooks.map(book => {
      if (book.id === bookId && book.borrowerId === currentUser.id) {
        return {
          ...book,
          available: true,
          dueDate: undefined,
          borrowerId: undefined
        };
      }
      return book;
    }));
  };

  useEffect(() => {
    setFilteredBooks(books);
  }, [books]);

  return (
    <LibraryContext.Provider value={{
      books,
      currentUser,
      searchBooks,
      borrowBook,
      returnBook,
      filteredBooks
    }}>
      {children}
    </LibraryContext.Provider>
  );
}

export const useLibrary = () => {
  const context = useContext(LibraryContext);
  if (context === undefined) {
    throw new Error('useLibrary must be used within a LibraryProvider');
  }
  return context;
};