import { Search, X } from 'lucide-react';
import { useCallback } from 'react';

export default function SearchBar({ onSearch, value }) {
  const handleClear = useCallback(() => {
    onSearch('');
  }, [onSearch]);

  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-custom-green w-5 h-5" />
        <input
          type="text"
          placeholder="Buscar apellidos..."
          value={value}
          onChange={(e) => onSearch(e.target.value)}
          className="w-full pl-12 pr-12 py-3 border-2 border-custom-gray rounded-lg focus:outline-none focus:border-custom-green transition-colors text-lg"
        />
        {value && (
          <button
            onClick={handleClear}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-custom-gray hover:text-custom-green transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}
