import { Linkedin } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-custom-green text-white py-8 mt-16 text-center">
      <p className="mb-2">
        © {year} Todos los derechos reservados. Aplicación hecha por
      </p>
      <a
        href="https://www.linkedin.com/in/vpa12345/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity underline underline-offset-2"
      >
        <Linkedin className="w-5 h-5" />
        Victor Pacheco
      </a>
    </footer>
  );
}
