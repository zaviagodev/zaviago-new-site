"use client"

import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import React from "react"

export default function Payment() {
  return (
    <React.Fragment>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto py-12 px-4">
        <div className="flex items-center justify-center">
          <img
            src="/placeholder.svg"
            alt="Product Image"
            width={400}
            height={400}
            className="w-full max-w-[300px] rounded-lg shadow-lg"
            style={{ aspectRatio: "400/400", objectFit: "cover" }}
          />
        </div>
        <div className="grid gap-6">
          <div>
            <h2 className="text-2xl font-bold">Acme Wireless Headphones</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Experience the ultimate in audio quality with our Acme Wireless Headphones. Crafted with premium materials
              and advanced noise cancellation technology, these headphones will immerse you in your music like never
              before.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">$99.99</span>
              <div className="flex items-center gap-2">
                <Label htmlFor="quantity" className="text-sm">
                  Quantity
                </Label>
                <Select id="quantity" defaultValue="1" className="w-20">
                  <SelectTrigger>
                    <SelectValue placeholder="1" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button
              size="lg"
              className="w-full"
              onClick={() => {
                console.log("Added to cart")
              }}
            >
              Add to Cart
            </Button>
            <div className="flex justify-center">
              <Link href="#" className="w-full" prefetch={false}>
                <Button variant="outline" size="lg" className="w-full">
                  Proceed to Checkout
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Acme Wireless Headphones</h3>
                  <p className="text-gray-500 dark:text-gray-400">Quantity: 1</p>
                </div>
                <span className="text-lg font-bold">$99.99</span>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span className="font-semibold">Subtotal</span>
                <span className="text-lg font-bold">$99.99</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold">Shipping</span>
                <span className="text-lg font-bold">$0.00</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold">Tax</span>
                <span className="text-lg font-bold">$8.00</span>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span className="font-semibold text-2xl">Total</span>
                <span className="text-2xl font-bold">$107.99</span>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Billing Information</h2>
            <form className="grid gap-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" placeholder="123 Main St" />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" placeholder="San Francisco" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="state">State</Label>
                  <Input id="state" placeholder="CA" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="zip">Zip</Label>
                  <Input id="zip" placeholder="94103" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="country">Country</Label>
                  <Input id="country" placeholder="United States" />
                </div>
              </div>
              <Button type="submit" size="lg" className="w-full">
                Place Order
              </Button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}