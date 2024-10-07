'use client';

// components/FinanceDocument.tsx
import React, { useEffect } from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 30,
    fontFamily: 'Helvetica'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 600,
    fontFamily: 'Helvetica-Bold'
  },
  paragraph: {
    fontSize: 12,
    marginBottom: 5
  }
});

type Props = {
  id: string;
};

export const MyDocument = (props: Props) => {
  const { id } = props;
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>{id}</Text>
          <Text style={styles.paragraph}>
            Financing is the process of providing funds for business activities, making purchases, or investing.
          </Text>
          <Text style={styles.paragraph}>
            There are two main types of financing: equity financing and debt financing.
          </Text>
          <Text style={styles.paragraph}>
            Equity financing involves raising capital through the sale of shares, while debt financing involves
            borrowing funds that must be repaid over time with interest.
          </Text>
          <Text style={styles.paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias rem voluptates eaque cumque dolor
            sapiente quaerat earum labore accusantium ab velit corrupti maxime minus ipsam, quasi fuga rerum aliquid
            recusandae? Corporis et necessitatibus odio neque atque illo impedit facilis est autem dolores perspiciatis
            facere odit.
          </Text>
        </View>
      </Page>
    </Document>
  );
};
