'use client';

import PDFRenderer from '@/components/template-surat/pdf-renderer';
import SuratKuasaFidusia from '@/components/template-surat/template-isi/surat-kuasa-fidusia';

const Page = () => {
  return (
    <PDFRenderer>
      <SuratKuasaFidusia />
    </PDFRenderer>
  );
};

export default Page;
