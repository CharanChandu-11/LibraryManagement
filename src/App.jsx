import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { LoginPage } from './pages/LoginPage';
import { SearchBar } from './components/SearchBar';
import { BookCard } from './components/BookCard';
import { MyBooks } from './components/MyBooks';
import { HomePage } from './pages/HomePage';
import { LibraryProvider, useLibrary } from './context/LibraryContext';
import { getEarliestRenewalDate, formatDate } from './utils/dates';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function LibraryContent() {
  const [activeTab, setActiveTab] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { books, filteredBooks } = useLibrary();

  const earliestRenewalDate = getEarliestRenewalDate(
    books.map((book) => book.renewalDate)
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} isLoggedIn={isLoggedIn} />

      <main>
        {activeTab === 'home' ? (
          <HomePage />
        ) : activeTab === 'login' ? (
          <LoginPage onLogin={() => {
            setIsLoggedIn(true);
            setActiveTab('home');
          }} />
        ) : ( 
          <div className="max-w-7xl mx-auto px-4 py-8">
            {activeTab !== 'mybooks' && (
              <div className="mb-8">
                <SearchBar />
              </div>
            )}

            {activeTab === 'mybooks' ? (
              <MyBooks />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBooks.length > 0 ? (
                  filteredBooks.map((book) => (
                    <BookCard key={book.id} book={book} />
                  ))
                ) : (
                  <p className="text-gray-600">No books found matching your search.</p>
                )}
              </div>
            )}
          </div>
        )}
      </main>

      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-600">
            <p>© 2024 Shelfwise+. All rights reserved.</p>
            <p className="mt-2 md:mt-0">
              Next library-wide renewal date: {formatDate(earliestRenewalDate)}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <LibraryProvider>
      <LibraryContent />
      <ToastContainer 
        position="bottom-right" 
        autoClose={2000} 
        newestOnTop 
        rtl={false}  
        pauseOnFocusLoss 
        draggable 
        pauseOnHover 
      />
    </LibraryProvider>
  );
}

export default App;