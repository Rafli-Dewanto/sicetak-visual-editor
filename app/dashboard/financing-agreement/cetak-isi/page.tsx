import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import FinancingAgreementTable from '@/features/financing-agreement/components/table';
import React from 'react';

const breadCrumbsItems = [
  {
    link: '/dashboard/financing-agreement',
    title: 'Financing Agreement'
  },
  {
    link: '/dashboard/financing-agreement/cetak-isi',
    title: 'Cetak Isi'
  }
];

const CetakIsiPage = () => {
  return (
    <PageContainer>
      <Breadcrumbs items={breadCrumbsItems} />
      <div className="my-4">
        <h1 className="py-2 text-lg font-bold">Data Konsumen</h1>
        <p>Agreement No: </p>
        <p>Customer Name: </p>
        <p>No Plat: </p>
        <p>Tipe Debitur: </p>
        <p>Product: </p>
        <p>OTR: </p>
        <p>Tenor: </p>
      </div>
      {/* <FinancingAgreementTable
        actionlabel1="Cetak Dokumen"
        actionlabel2="Cetak Dokumen"
        productname="Formulir Permohonan Pembiayaan Laporan Survei Analisa Pembiayaan"
        tablecaption="Fasilitas Dana"
        tableheader1="Nama Produk"
        tableheader2="Cetak Perseorangan"
        tableheader3="Cetak Perusahaan"
      /> */}
    </PageContainer>
  );
};

export default CetakIsiPage;
