import React, { useEffect, useState } from 'react';
import { BookOpen, Users, Clock } from 'lucide-react';
import { useLibrary } from '../context/LibraryContext';

export function HomePage() {
  const { books } = useLibrary();
  const availableBooks = books.filter(book => book.available).length;
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setInView(true);
          } else {
            setInView(false); 
          }
        });
      },
      { threshold: 0.5 } 
    );

    const targets = document.querySelectorAll('.book-card');
    targets.forEach(target => observer.observe(target));

    return () => {
      targets.forEach(target => observer.unobserve(target));
    };
  }, []);
  return (
    <div className="space-y-12">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to Shelfwise+</h1>
          <p className="text-xl md:text-2xl mb-8"> Library Management System</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
              Browse Collection
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <BookOpen className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800">{books.length}</h3>
            <p className="text-gray-600">Total Books</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <Users className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800">{availableBooks}</h3>
            <p className="text-gray-600">Available Now</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <Clock className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800">14 Days</h3>
            <p className="text-gray-600">Renewation Period</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {books.slice(0, 4).map((book, index) => (
            <div
              key={book.id}
              className={`book-card bg-white rounded-lg shadow-md overflow-hidden transform transition duration-500 ease-in-out
                ${inView
                  ? index % 2 === 0
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-100 translate-x-0' 
                  : index % 2 === 0
                  ? 'opacity-0 translate-x-[-10%]'
                  : 'opacity-0 translate-x-[10%]' 
                }`}
            >
              <img
                src={book.coverUrl}
                alt={book.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-800">{book.title}</h3>
                <p className="text-gray-600 text-sm">{book.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
