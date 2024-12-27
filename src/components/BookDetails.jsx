import React from 'react';
import { Calendar, BookOpen, ShieldAlert, Clock } from 'lucide-react';

export function BookDetails({ book, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ×
        </button>
        
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={book.coverUrl}
            alt={book.title}
            className="w-full md:w-1/3 h-64 object-cover rounded-lg"
          />
          
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{book.title}</h2>
            <p className="text-gray-600 mb-4">{book.author}</p>
            
            <p className="text-gray-700 mb-6">{book.description}</p>
            
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-600">
                <BookOpen className="w-4 h-4 mr-2" />
                <span>Location: Shelf {book.shelf}, Row {book.row}</span>
              </div>
              
              <div className="flex items-center text-sm">
                <ShieldAlert className="w-4 h-4 mr-2" />
                <span className={book.available ? 'text-green-600' : 'text-red-600'}>
                  {book.available ? 'Available' : `Due: ${book.dueDate}`}
                </span>
              </div>
              
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="w-4 h-4 mr-2" />
                <span>Loan Period: 14 days</span>
              </div>
              
              <div className="flex items-center text-sm text-gray-600">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Next Renewal: {book.renewalDate}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
