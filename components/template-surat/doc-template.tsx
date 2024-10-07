'use client';

import React from 'react';
import PDFRenderer from './pdf-renderer';
import { MyDocument } from './templ';

type Props = {
  documentID: string;
};

const DocTemplate = (props: Props) => {
  const { documentID } = props;
  return (
    <PDFRenderer>
      <MyDocument id={documentID} />
    </PDFRenderer>
  );
};

export default DocTemplate;
