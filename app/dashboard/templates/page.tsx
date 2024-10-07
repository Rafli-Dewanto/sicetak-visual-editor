import PageContainer from '@/components/layout/page-container';
import Link from 'next/link';
import React from 'react';

const TemplatesPage = () => {
  return (
    <PageContainer>
      <section className="">
        Templates
        <Link href="/dashboard/templates/new">create new template</Link>
      </section>
    </PageContainer>
  );
};

export default TemplatesPage;
