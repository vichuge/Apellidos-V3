import pdfsManifest from '../pdfs-manifest.json';

export const getPDFsByLetter = (letter) => {
  if (letter === 'Todos') {
    return Object.values(pdfsManifest).flat();
  }
  return pdfsManifest[letter] || [];
};

export const searchPDFs = (query) => {
  const lowerQuery = query.toLowerCase();
  const allPDFs = Object.values(pdfsManifest).flat();
  return allPDFs.filter((pdf) =>
    pdf.name.toLowerCase().includes(lowerQuery)
  );
};

export const getAvailableLetters = () => {
  return Object.keys(pdfsManifest).sort();
};
