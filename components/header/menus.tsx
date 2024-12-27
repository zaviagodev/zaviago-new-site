import Link from "next/link"
import { ReactNode } from "react"
import { Button } from "../ui/button"

interface MenusProps {
    title: string
    link: string
    content?: ReactNode
}

export const menus: MenusProps[] = [
    {
      title: "Our Products",
      link: "/products"
    },
    {
      title: "Features",
      link:"",
      content:(
        <div className="flex flex-col gap-2">
          <Link href="/manage">
            <Button variant="ghost" className="w-full justify-start">Manage</Button>
          </Link>
          <Link href="/marketplaces">
            <Button variant="ghost" className="w-full justify-start">Marketplaces</Button>
          </Link>
          <Link href="/webbuilder">
            <Button variant="ghost" className="w-full justify-start">Web Builder</Button>
          </Link>
          <Link href="/crm">
            <Button variant="ghost" className="w-full justify-start">CRM</Button>
          </Link>
        </div>
      )
    },
    {
      title: "About us",
      link:"",
      content:(
        <div className="flex flex-col gap-2">
          <Link href="/investor">
            <Button variant="ghost" className="w-full justify-start">Investors</Button>
          </Link>
          <Link href="/jobs">
            <Button variant="ghost" className="w-full justify-start">Work with us</Button>
          </Link>
        </div>
      )
    },
    {
      title: "Pricing",
      link: "https://page.line.me/zaviago"
    }
]