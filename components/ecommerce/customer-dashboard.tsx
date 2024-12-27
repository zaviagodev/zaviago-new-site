"use client"

import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import React from "react"

export default function CustomerDashboard() {
  return (
    <React.Fragment>
      <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 border-b">
        <Link href="#" className="mr-6 flex items-center" prefetch={false}>
          <BoltIcon className="h-6 w-6" />
          <span className="text-lg font-bold">Acme Utilities</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Dashboard
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Billing
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Usage
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Support
          </Link>
        </nav>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex items-center justify-between">
              <CardTitle>Current Usage</CardTitle>
              <BoltIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">
                <span>1,234</span>
                <span className="text-2xl font-medium text-gray-500 dark:text-gray-400">kWh</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Last 30 days usage</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex items-center justify-between">
              <CardTitle>Current Bill</CardTitle>
              <DollarSignIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">
                <span>$123.45</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Due on June 15, 2023</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex items-center justify-between">
              <CardTitle>Alerts</CardTitle>
              <TriangleAlertIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500/10 text-red-500">
                    <TriangleAlertIcon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">Outage Reported</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      There is a reported outage in your area. Estimated restoration time is 2 hours.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-500/10 text-yellow-500">
                    <XIcon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">Payment Due</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Your utility bill is due in 3 days. Please make a payment to avoid late fees.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex items-center justify-between">
              <CardTitle>Past Bills</CardTitle>
              <FileTextIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">May 2023</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Due: May 15, 2023</p>
                  </div>
                  <div className="text-lg font-bold">$123.45</div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">April 2023</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Due: April 15, 2023</p>
                  </div>
                  <div className="text-lg font-bold">$112.34</div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">March 2023</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Due: March 15, 2023</p>
                  </div>
                  <div className="text-lg font-bold">$98.76</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex items-center justify-between">
              <CardTitle>Make a Payment</CardTitle>
              <CreditCardIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="amount">Amount</Label>
                  <Input id="amount" type="number" placeholder="Enter amount" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="payment-method">Payment Method</Label>
                  <Select id="payment-method" className="mt-1">
                    <option>Credit Card</option>
                    <option>Bank Account</option>
                    <option>PayPal</option>
                  </Select>
                </div>
                <Button className="w-full">Make Payment</Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex items-center justify-between">
              <CardTitle>Contact Support</CardTitle>
              <PhoneIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" type="text" placeholder="Enter your name" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Enter your message" className="mt-1" />
                </div>
                <Button className="w-full">Submit</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </React.Fragment>
  )
}

function BoltIcon(props: any) {
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
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
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


function DollarSignIcon(props: any) {
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
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}


function FileTextIcon(props: any) {
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
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </svg>
  )
}


function PhoneIcon(props: any) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}


function TriangleAlertIcon(props: any) {
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
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  )
}


function XIcon(props: any) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}