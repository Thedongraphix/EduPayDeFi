// src/app/providers/PrivyProvider.tsx
'use client';

import { PrivyProvider } from '@privy-io/react-auth';


interface PrivyProviderWrapperProps {
  children: React.ReactNode;
}

export default function PrivyProviderWrapper({ children }: PrivyProviderWrapperProps) {
  
  return (
    <PrivyProvider
      appId='cm35xkh1r03bvcpeg8p67h8mn'
      config={{
        loginMethods: ['email',], 
        appearance: {
          theme: 'dark',
          accentColor: '#676FFF',
          showWalletLoginFirst: false,
        },
        embeddedWallets: {
          createOnLogin: 'users-without-wallets',
        },
     
      }}
      
    >
      {children}
    </PrivyProvider>
  );
}