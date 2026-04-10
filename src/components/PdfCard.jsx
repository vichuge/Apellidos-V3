import { useState, useEffect } from 'react';
import { FileText, Loader } from 'lucide-react';

export default function PdfCard({ pdf }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const userAgent = navigator.userAgent.toLowerCase();
    const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;
    const isMobileDevice = mobileRegex.test(userAgent) || window.innerWidth < 768;
    setIsMobile(isMobileDevice);
  }, []);

  const handleClick = () => {
    if (!isClient) return;

    setIsLoading(true);
    const pdfPath = `/Apellidos-V3/apellidos/${pdf.letter}/${pdf.path}`;
    
    if (isMobile) {
      const link = document.createElement('a');
      link.href = pdfPath;
      link.download = `${pdf.name}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(`${pdfPath}#toolbar=0&navpanes=0`, '_blank');
    }

    setIsLoading(false);
  };

  return (
    <div
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick();
        }
      }}
      role="button"
      tabIndex={0}
      className="bg-white border-2 border-custom-gray rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow hover:border-custom-green group"
    >
      <div className="flex items-start gap-3">
        <FileText className="w-8 h-8 text-custom-green flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-800 truncate group-hover:text-custom-green transition-colors">
            {pdf.name}
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            {isMobile ? 'Toca para descargar' : 'Haz clic para ver'}
          </p>
        </div>
        {isLoading && (
          <Loader className="w-5 h-5 text-custom-green animate-spin flex-shrink-0" />
        )}
      </div>
    </div>
  );
}
