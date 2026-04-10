import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import LetterNavigation from './components/LetterNavigation';
import PdfCard from './components/PdfCard';
import Footer from './components/Footer';
import { getPDFsByLetter, searchPDFs, getAvailableLetters } from './lib/pdfs';

function App() {
  const [pdfs, setPdfs] = useState([]);
  const [selectedLetter, setSelectedLetter] = useState('A');
  const [searchQuery, setSearchQuery] = useState('');
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    const availableLetters = getAvailableLetters();
    setLetters(availableLetters);
  }, []);

  const filteredPdfs = searchQuery
    ? searchPDFs(searchQuery)
    : getPDFsByLetter(selectedLetter);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="flex-1">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-2 text-gray-800">
            Apellidos Hispanos
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Explora una colección de apellidos organizados alfabéticamente
          </p>

          <SearchBar value={searchQuery} onSearch={setSearchQuery} />

          {!searchQuery && (
            <LetterNavigation
              letters={letters}
              selectedLetter={selectedLetter}
              onSelectLetter={setSelectedLetter}
            />
          )}

          {filteredPdfs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredPdfs.map((pdf) => (
                <PdfCard key={`${pdf.letter}-${pdf.path}`} pdf={pdf} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No se encontraron resultados para "{searchQuery || selectedLetter}"
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
