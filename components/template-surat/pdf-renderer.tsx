import React from 'react';
import PDFViewer from './pdf-viewer';

const PDFRenderer = ({ children }: { children: React.ReactElement }) => {
  return (
    <PDFViewer width={'100%'} height={'100%'}>
      {children}
    </PDFViewer>
  );
};

export default PDFRenderer;
