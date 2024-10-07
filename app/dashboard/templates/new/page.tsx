'use client';

import ClientOnly from '@/components/elements/client-only';
import { config, initialData } from '@/components/puck';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { Config, Puck, Render } from '@measured/puck';
import { ScanEye } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

const CreateNewTemplatePage = () => {
  const [, setStoredConfig] = useLocalStorage('puck-editor-preview', initialData);
  const [, setHTML] = useLocalStorage('puck-html', '');

  return (
    <ClientOnly>
      <Puck
        config={config as Config}
        data={initialData}
        onPublish={() => {
          localStorage.setItem('data', JSON.stringify(initialData));
        }}
        onChange={(data) => {
          setStoredConfig(data);
          const htmlContent = renderToStaticMarkup(<Render config={config as Config} data={data} />);
          setHTML(htmlContent);
        }}
        overrides={{
          // eslint-disable-next-line react/no-unstable-nested-components
          headerActions: ({ children }) => (
            <>
              <Link
                href={`/dashboard/templates/new/preview`}
                target="_blank"
                className="flex h-full w-full items-center justify-center rounded-md border border-gray-800 px-[0.9rem] py-[0.4rem] text-sm font-medium text-gray-800 transition duration-150 ease-in-out hover:border-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
              >
                <ScanEye className="mr-2 h-4 w-4" />
                <p>Preview</p>
              </Link>
              {children}
            </>
          )
        }}
      />
    </ClientOnly>
  );
};

export default CreateNewTemplatePage;
