'use client';

import PDFRenderer from '@/components/template-surat/pdf-renderer';
import SuratKuasaPDF from '@/components/template-surat/surat-kuasa-fidusia';
import React from 'react';

const Page = () => {
  return (
    <PDFRenderer>
      <SuratKuasaPDF />
    </PDFRenderer>
  );
};

export default Page;
