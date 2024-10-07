import PageContainer from '@/components/layout/page-container';
import DocTemplate from '@/components/template-surat/doc-template';
import React from 'react';

const DocumentTemplate = ({ params }: { params: { slug: string } }) => {
  const { slug: documentID } = params;
  return (
    <PageContainer>
      <div className="h-full w-full">
        <DocTemplate documentID={documentID} />
      </div>
    </PageContainer>
  );
};
export default DocumentTemplate;
