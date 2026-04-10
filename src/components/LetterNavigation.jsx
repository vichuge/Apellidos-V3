export default function LetterNavigation({ letters, selectedLetter, onSelectLetter }) {
  const allLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {allLetters.map((letter) => (
        <button
          key={letter}
          onClick={() => onSelectLetter(letter)}
          className={`px-3 py-2 rounded font-semibold transition-all ${
            selectedLetter === letter
              ? 'bg-custom-green text-white shadow-lg'
              : 'bg-custom-gray text-white hover:opacity-80'
          }`}
        >
          {letter}
        </button>
      ))}
    </div>
  );
}
