import PrinterIcon from '@/components/icons/printer';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Link from 'next/link';

import React from 'react';

interface Props extends React.ComponentPropsWithRef<'table'> {}

const templatesV2: Array<Array<{ [key: string]: { [key: string]: 'perseorangan' | 'perusahaan' } }>> = [
  // Fasilitas Dana
  [
    {
      'Formulir Data Calon Debitur Pengganti': {
        perseorangan: 'perseorangan',
        perusahaan: 'perusahaan'
      }
    },
    {
      'Formulir Survei Oper Alih - Agreement Transfer': {
        perseorangan: 'perseorangan',
        perusahaan: 'perusahaan'
      }
    },
    {
      'Surat Kuasa Fidusia': {}
    }
  ],
  // Fasilitas Modal Usaha
  [
    {
      'Formulir Data Calon Debitur Pengganti': {
        perseorangan: 'perseorangan',
        perusahaan: 'perusahaan'
      }
    },
    {
      'Formulir Survei Oper Alih - Agreement Transfer': {
        perseorangan: 'perseorangan',
        perusahaan: 'perusahaan'
      }
    }
  ]
  // and so on
];

function getTableCaption(key: string) {
  const tableCaptions = {
    '0': 'Fasilitas Dana',
    '1': 'Fasilitas Modal Usaha',
    '2': 'Installment Financing',
    '3': 'SLB',
    '4': 'Mitra Loyal Carfin',
    '5': 'Flash Cash R2',
    default: ''
  };
  return tableCaptions[key as keyof typeof tableCaptions] ?? tableCaptions['default'];
}

const FinancingAgreementTable = (props: Props) => {
  return (
    <>
      {templatesV2.map((templates, index) => (
        <div key={index} className="mb-6">
          <Table key={index} {...props}>
            <TableCaption>{getTableCaption(`${index}`)}</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Nama Produk</TableHead>
                <TableHead>Cetak Perseorangan</TableHead>
                <TableHead>Cetak Perusahaan</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {templates.map((template, templateIndex) => {
                const templateName = Object.keys(template)[0];
                return (
                  <TableRow key={templateIndex}>
                    <TableCell className="font-medium">{templateName}</TableCell>
                    <TableCell>
                      <Link href="/dashboard/financing-agreement/" className="flex items-center justify-start">
                        <PrinterIcon className="mr-2" />
                        <p>Cetak Dokumen</p>
                      </Link>
                    </TableCell>
                    <TableCell>
                      <Link href="/" className="flex items-center justify-start">
                        <PrinterIcon className="mr-2" />
                        <p>Cetak Dokumen</p>
                      </Link>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      ))}
    </>
  );
};

export default FinancingAgreementTable;
