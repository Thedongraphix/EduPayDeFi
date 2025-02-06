// src/components/LoginButton.tsx
'use client';

import { usePrivy } from '@privy-io/react-auth';

export default function LoginButton() {
  const { login, authenticated, user } = usePrivy();

  if (authenticated) {
    return (
      <div className="p-4 bg-green-100 text-green-700 rounded-lg">
        Logged in as: {String(user?.email)}
      </div>
    );
  }

  return (
    <button
      onClick={login}
      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
    >
      Login with Privy
    </button>
  );
}