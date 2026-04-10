import { Github } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-custom-green text-white py-8 mt-16 text-center">
      <p className="mb-2">
        © {year} Vichuge. Todos los derechos reservados.
      </p>
      <a
        href="https://github.com/vichuge"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity underline underline-offset-2"
      >
        <Github className="w-5 h-5" />
        GitHub
      </a>
    </footer>
  );
}
