import { BellIcon, UserCircleIcon } from '@heroicons/react/24/outline'

export default function Header({ toggleSidebar }: { toggleSidebar: () => void }) {
  return (
    <header className="bg-white bg-opacity-10 backdrop-blur-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button onClick={toggleSidebar} className="text-white p-1 mr-4 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h2 className="text-2xl font-semibold text-white">Dashboard</h2>
          </div>
          <div className="flex items-center">
            <button className="text-white p-1 mr-4 focus:outline-none">
              <BellIcon className="h-6 w-6" />
            </button>
            <button className="text-white p-1 focus:outline-none">
              <UserCircleIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}