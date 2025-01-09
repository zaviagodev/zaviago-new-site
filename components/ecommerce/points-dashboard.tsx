import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"

export default function PointsDashboard() {
  return (
    <div className="grid min-h-screen gap-4 p-4 lg:grid-cols-[240px_1fr] md:gap-6">
      <div className="flex flex-col gap-2">
        <div className="flex h-14 items-center border-b">
          <Link href="#" className="flex items-center gap-2 font-semibold" prefetch={false}>
            <Package2Icon className="h-6 w-6" />
            <span className="">Acme Inc</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              prefetch={false}
            >
              <HomeIcon className="h-4 w-4" />
              Home
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
              prefetch={false}
            >
              <CreditCardIcon className="h-4 w-4" />
              Points
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              prefetch={false}
            >
              <PackageIcon className="h-4 w-4" />
              Rewards
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              prefetch={false}
            >
              <UsersIcon className="h-4 w-4" />
              Account
            </Link>
          </nav>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <header className="flex h-14 items-center gap-4 border-b px-4 md:px-6">
          <Button variant="icon" className="rounded-full md:hidden">
            <ChevronLeftIcon className="h-4 w-4" />
            <span className="sr-only">Toggle sidebar</span>
          </Button>
          <h1 className="text-lg font-semibold">Points</h1>
          <nav className="flex ml-auto items-center gap-4">
            <Button variant="outline" className="rounded-full">
              <SearchIcon className="w-4 h-4" />
              <span className="sr-only">Search</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
                >
                  <img
                    src="/placeholder.svg"
                    width="32"
                    height="32"
                    className="rounded-full"
                    alt="Avatar"
                    style={{ aspectRatio: "32/32", objectFit: "cover" }}
                  />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </header>
        <div className="flex flex-col gap-4 p-4 md:gap-8 md:p-10">
          <Card>
            <CardHeader>
              <CardTitle>Points Balance</CardTitle>
              <CardDescription>
                Your current points balance. You can use these points to redeem rewards.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center">
              <div className="text-5xl font-bold">4500</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>Your most recent points transactions.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[150px]">Date</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead className="text-right">Points</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>2022-06-23</TableCell>
                    <TableCell>Redeemed for Gift Card</TableCell>
                    <TableCell className="text-right">-1000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2022-06-22</TableCell>
                    <TableCell>Referral Bonus</TableCell>
                    <TableCell className="text-right">+500</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2022-06-20</TableCell>
                    <TableCell>Redeemed for Coffee Mug</TableCell>
                    <TableCell className="text-right">-250</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2022-06-19</TableCell>
                    <TableCell>Survey Completion</TableCell>
                    <TableCell className="text-right">+100</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2022-06-18</TableCell>
                    <TableCell>Redeemed for T-Shirt</TableCell>
                    <TableCell className="text-right">-500</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Available Rewards</CardTitle>
              <CardDescription>Browse our available rewards and redeem your points.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <div className="flex flex-col items-center p-4">
                    <img
                      src="/placeholder.svg"
                      width="150"
                      height="150"
                      alt="Reward image"
                      className="aspect-square rounded-lg object-cover"
                    />
                    <div className="grid gap-1.5">
                      <CardTitle className="text-xl font-bold">$25 Amazon Gift Card</CardTitle>
                      <CardDescription>
                        Redeem your points for a $25 Amazon Gift Card. Use it to buy books, electronics, and more on
                        Amazon.com.
                      </CardDescription>
                      <Button size="sm">Redeem (2500 points)</Button>
                    </div>
                  </div>
                </Card>
                <Card>
                  <div className="flex flex-col items-center p-4">
                    <img
                      src="/placeholder.svg"
                      width="150"
                      height="150"
                      alt="Reward image"
                      className="aspect-square rounded-lg object-cover"
                    />
                    <div className="grid gap-1.5">
                      <CardTitle className="text-xl font-bold">$50 Starbucks Gift Card</CardTitle>
                      <CardDescription>
                        Redeem your points for a $50 Starbucks Gift Card. Use it to buy coffee, pastries, and more at
                        Starbucks locations.
                      </CardDescription>
                      <Button size="sm">Redeem (5000 points)</Button>
                    </div>
                  </div>
                </Card>
                <Card>
                  <div className="flex flex-col items-center p-4">
                    <img
                      src="/placeholder.svg"
                      width="150"
                      height="150"
                      alt="Reward image"
                      className="aspect-square rounded-lg object-cover"
                    />
                    <div className="grid gap-1.5">
                      <CardTitle className="text-xl font-bold">$100 Uber Eats Gift Card</CardTitle>
                      <CardDescription>
                        Redeem your points for a $100 Uber Eats Gift Card. Use it to order food delivery from your
                        favorite restaurants with Uber Eats.
                      </CardDescription>
                      <Button size="sm">Redeem (10000 points)</Button>
                    </div>
                  </div>
                </Card>
                <Card>
                  <div className="flex flex-col items-center p-4">
                    <img
                      src="/placeholder.svg"
                      width="150"
                      height="150"
                      alt="Reward image"
                      className="aspect-square rounded-lg object-cover"
                    />
                    <div className="grid gap-1.5">
                      <CardTitle className="text-xl font-bold">$50 Nike Gift Card</CardTitle>
                      <CardDescription>
                        Redeem your points for a $50 Nike Gift Card. Use it to shop for athletic shoes, apparel, and
                        accessories at Nike stores.
                      </CardDescription>
                      <Button size="sm">Redeem (5000 points)</Button>
                    </div>
                  </div>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function ChevronLeftIcon(props: any) {
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
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}


function CreditCardIcon(props: any) {
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
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  )
}


function HomeIcon(props: any) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function Package2Icon(props: any) {
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
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  )
}


function PackageIcon(props: any) {
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
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}


function SearchIcon(props: any) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function UsersIcon(props: any) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}