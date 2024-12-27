import React from 'react';
import { Calendar, BookOpen, ShieldAlert } from 'lucide-react';
import { useLibrary } from '../context/LibraryContext';
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

export function BookCard({ book }) {
  const { borrowBook, returnBook, currentUser } = useLibrary();
  const isBookedByCurrentUser = book.borrowerId === currentUser?.id;

  const handleBookAction = () => {
    if (book.available) {
      borrowBook(book.id);
      toast.success(
        `You have successfully borrowed the book! Renew it on: ${book.renewalDate}`
      );
    } else if (isBookedByCurrentUser) {
      returnBook(book.id);
      toast.info('You have successfully returned the book!');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img
        src={book.coverUrl}
        alt={book.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{book.title}</h3>
        <p className="text-gray-600">{book.author}</p>
        
        <div className="mt-3 space-y-2">
          <div className="flex items-center text-sm text-gray-500">
            <BookOpen className="w-4 h-4 mr-2" />
            <span>Shelf {book.shelf}, Row {book.row}</span>
          </div>
          
          <div className="flex items-center text-sm">
            <ShieldAlert className="w-4 h-4 mr-2" />
            <span className={book.available ? 'text-green-600' : 'text-red-600'}>
              {book.available ? 'Available' : `Due: ${book.dueDate}`}
            </span>
          </div>
          
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="w-4 h-4 mr-2" />
            <span>Renewal: {book.renewalDate}</span>
          </div>

          {(book.available || isBookedByCurrentUser) && (
            <button
              onClick={handleBookAction}
              className={`mt-2 w-full py-2 px-4 rounded-md ${
                book.available
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                  : 'bg-red-600 text-white hover:bg-red-700'
              }`}
            >
              {book.available ? 'Borrow Book' : 'Return Book'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
