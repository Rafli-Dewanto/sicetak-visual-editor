'use client';

import ClientOnly from '@/components/elements/client-only';
import { config } from '@/components/puck';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { Config, Data, Render } from '@measured/puck';

const Preview = () => {
  const [storedConfig] = useLocalStorage('puck-editor-preview', {});

  return (
    <ClientOnly>
      <Render config={config as Config} data={(storedConfig as unknown as Data) ?? {}} />
    </ClientOnly>
  );
};

export default Preview;
