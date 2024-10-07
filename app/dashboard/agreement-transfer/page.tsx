import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import FinancingAgreementTable from '@/features/financing-agreement/components/table';

const breadCrumbsItems = [
  {
    link: '/dashboard',
    title: 'Dashboard'
  },
  {
    link: '/dashboard/agreement-transfer',
    title: 'Agreement Transfer'
  }
];

const AgreementTransferPage = () => {
  return (
    <PageContainer>
      <Breadcrumbs className="mb-8" items={breadCrumbsItems} />
      <Tabs defaultValue="template" className="min-h-screen w-full px-2 md:px-4">
        <TabsList>
          <TabsTrigger value="template">Template</TabsTrigger>
          <TabsTrigger value="isi">Isi</TabsTrigger>
        </TabsList>
        <TabsContent value="template">
          {/* <FinancingAgreementTable
            actionLabel1="Cetak Dokumen"
            actionLabel2="Cetak Dokumen"
            productName="Formulir Permohonan Pembiayaan Laporan Survei Analisa Pembiayaan"
            tableCaption="Fasilitas Dana"
            tableHeader1="Nama Produk"
            tableHeader2="Cetak Perseorangan"
            tableHeader3="Cetak Perusahaan"
          /> */}
        </TabsContent>
        <TabsContent value="isi">Cetak Isi</TabsContent>
      </Tabs>
    </PageContainer>
  );
};

export default AgreementTransferPage;
