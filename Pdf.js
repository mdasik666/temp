import React, { useEffect, useRef } from 'react';
import pdfjsLib from 'pdfjs-dist/webpack';

const PdfToHtml = ({ pdfUrl }) => {
  const canvasRef = useRef();

  useEffect(() => {
    const renderPdf = async () => {
      const pdf = await pdfjsLib.getDocument(pdfUrl).promise;
      const page = await pdf.getPage(1);

      const viewport = page.getViewport({ scale: 1 });
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      canvas.width = viewport.width;
      canvas.height = viewport.height;

      await page.render({ canvasContext: context, viewport }).promise;
    };

    renderPdf();
  }, [pdfUrl]);

  return <canvas ref={canvasRef} style={{ border: '1px solid black' }} />;
};

export default PdfToHtml;
