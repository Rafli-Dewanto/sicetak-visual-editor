'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useTheme } from 'next-themes';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

const AgreementNoInput = () => {
  const [agreementNo, setAgreementNo] = useState('');
  const pathname = usePathname();
  const router = useRouter();
  const { theme } = useTheme();

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-start gap-x-4">
        <div className="relative w-full">
          <Input
            name="agreement_no"
            placeholder="Agreement Number"
            className="max-w-md !pr-0"
            onChange={(e) => setAgreementNo(e.target.value)}
          />
          <Button
            tabIndex={0}
            variant={'outline'}
            onClick={() => router.push(`${pathname}/cetak-isi?agreement-no=${agreementNo}`)}
            className="absolute right-0 top-1/2 -translate-y-1/2 transform" // Position the button
          >
            <Search color={theme === 'dark' ? '#ffffff' : '#070102'} size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AgreementNoInput;
