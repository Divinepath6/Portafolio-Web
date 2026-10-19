import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';


pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface Props {
  archivoPdf: string;
}

const PDFVisor: React.FC<Props> = ({ archivoPdf }) => {
  return (
    <div className="contenedor-pdf-limpio">
      <Document file={archivoPdf} loading={<p className="texto-cargando">Cargando certificado...</p>}>
        <Page 
          pageNumber={1} 
          width={300} 
          renderTextLayer={false} 
          renderAnnotationLayer={false} 
        />
      </Document>
    </div>
  );
};

export default PDFVisor;