import fs from 'fs';
import path from 'path';

const apellidosDir = path.resolve('public/apellidos');
const outputFile = path.resolve('src/pdfs-manifest.json');

const manifest = {};

try {
  const letters = fs.readdirSync(apellidosDir);

  for (const letter of letters) {
    if (letter === 'A' || letter.match(/^[A-Z]$/)) {
      const letterDir = path.join(apellidosDir, letter);
      const stats = fs.statSync(letterDir);

      if (stats.isDirectory()) {
        const files = fs.readdirSync(letterDir);
        const cleanFiles = files.filter(
          (f) => f.endsWith('-clean.pdf') && !f.startsWith('._')
        );

        if (cleanFiles.length > 0) {
          manifest[letter] = cleanFiles.map((file) => ({
            name: file
              .replace('-clean.pdf', '')
              .replace(/^\.+/, '')
              .trim()
              .split(' ')
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
              .join(' '),
            path: file,
            letter: letter,
          }));
        }
      }
    }
  }

  fs.writeFileSync(outputFile, JSON.stringify(manifest, null, 2));
  console.log('✓ Manifesto de PDFs generado:', outputFile);
} catch (error) {
  console.error('Error generando manifesto:', error);
  process.exit(1);
}
