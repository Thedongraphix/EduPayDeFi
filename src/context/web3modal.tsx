
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */

'use client';

import { createAppKit } from '@reown/appkit/react';
import { EthersAdapter } from '@reown/appkit-adapter-ethers';
import { mainnet, arbitrum } from '@reown/appkit/networks';

interface Features {
  analytics: boolean;
  auth: boolean;
  wallet: boolean;
}

// 1. Get projectId at https://cloud.reown.com
const projectId = '57316f35292be788506e254eb0524d62';

// 2. Create a metadata object
const metadata = {
  name: 'Edupay',
  description: 'Crypto School Payment System',
  url: 'https://edupaydefi.vercel.app', // origin must match your domain & subdomain
  icons: ['https://assets.reown.com/reown-profile-pic.png'],
};

// 3. Create the AppKit instance
createAppKit({
  adapters: [new EthersAdapter()],
  metadata,
  networks: [mainnet, arbitrum],
  projectId,
  features: {
    analytics: true,
    auth: true,
    wallet: true,
  } as Features,
})


// Export the Web3Modal Button Component
export function Web3ModalButton() {
  return (
    <w3m-button
      size="md"
      label="Connect Wallet"
      loadingLabel="Loading"
      disabled={false}
      balance={undefined}
    />
  );
}
