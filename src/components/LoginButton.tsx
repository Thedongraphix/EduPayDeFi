// src/components/LoginButton.tsx
'use client';

import { usePrivy } from '@privy-io/react-auth';

export default function LoginButton() {
  const { ready, authenticated, login, user } = usePrivy();
  // Disable login when Privy is not ready or the user is already authenticated
  const disableLogin = !ready || (ready && authenticated);

  if (authenticated) {
    return (
      <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          <span className="text-sm font-medium">
            {user?.email ? (
              <>
                Connected: <span className="font-normal opacity-75">{user.email.toString()}</span>
              </>
            ) : (
              'Connected'
            )}
          </span>
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={login}
      disabled={disableLogin}
      className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      Sign up
    </button>
  );
}