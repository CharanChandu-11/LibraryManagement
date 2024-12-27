import { Search } from 'lucide-react';
import { useLibrary } from '../context/LibraryContext';

export function SearchBar() {
  const { searchBooks } = useLibrary();

  return (
    <div className="relative max-w-xl mx-auto">
      <input
        type="text"
        placeholder="Search books by title, author..."
        className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        onChange={(e) => searchBooks(e.target.value)}
      />
      <Search className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
    </div>
  );
}