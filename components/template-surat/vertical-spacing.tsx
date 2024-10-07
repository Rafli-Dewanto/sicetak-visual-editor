'use client';

import { View } from '@react-pdf/renderer';
import React from 'react';

/**
 *
 * @param height string in px unit e.g., "12px", "34px" etc
 * @returns ReactElement
 */
const VerticalSpacing = ({ height }: { height: string }) => {
  return (
    <View
      style={{
        height
      }}
    />
  );
};

export default VerticalSpacing;
