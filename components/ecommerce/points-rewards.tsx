export default function PointsRewards() {
    return (
      <div className="flex flex-col w-full max-w-3xl mx-auto px-4 md:px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Point Rewards Program</h1>
          <div className="rounded-lg px-4 py-2 flex items-center">
            <GiftIcon className="h-5 w-5 mr-2 text-gray-500 dark:text-gray-400" />
            <span className="font-medium text-gray-900 dark:text-gray-50">12,345 Points</span>
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm">
            <div className="px-4 py-3 border-b dark:border-gray-800">
              <h2 className="text-lg font-medium">Recent Transactions</h2>
            </div>
            <div className="divide-y dark:divide-gray-800">
              <div className="px-4 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <CalendarIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">June 15, 2023</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-sm font-medium text-green-500">+100 Points</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Signup Bonus</span>
                </div>
              </div>
              <div className="px-4 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <CalendarIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">June 10, 2023</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-sm font-medium text-red-500">-50 Points</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Purchase Discount</span>
                </div>
              </div>
              <div className="px-4 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <CalendarIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">June 5, 2023</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-sm font-medium text-green-500">+75 Points</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Referral Bonus</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  function CalendarIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <rect width="18" height="18" x="3" y="4" rx="2" />
        <path d="M3 10h18" />
      </svg>
    )
  }
  
  
  function GiftIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="8" width="18" height="4" rx="1" />
        <path d="M12 8v13" />
        <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
        <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
      </svg>
    )
  }