'use client';

import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AgreementNoInput from '@/features/financing-agreement/components/agreement-no-input';
import FinancingAgreementTable from '@/features/financing-agreement/components/table';

const breadCrumbsItems = [
  {
    link: '/dashboard/financing-agreement',
    title: 'Financing Agreement'
  }
];

const FinancingAgreementPage = () => {
  return (
    <PageContainer>
      <Breadcrumbs className="mb-8" items={breadCrumbsItems} />
      <Tabs defaultValue="template" className="min-h-screen w-full px-2 md:px-4">
        <TabsList>
          <TabsTrigger value="template">Template</TabsTrigger>
          <TabsTrigger value="isi">Isi</TabsTrigger>
        </TabsList>
        <TabsContent value="template">
          <FinancingAgreementTable />
        </TabsContent>
        <TabsContent value="isi">
          <AgreementNoInput />
        </TabsContent>
      </Tabs>
    </PageContainer>
  );
};

export default FinancingAgreementPage;
