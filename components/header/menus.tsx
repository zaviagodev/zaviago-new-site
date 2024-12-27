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
        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-2">
            <Link href="/manage">
              <Button variant="ghost" className="w-full items-start flex flex-col h-fit">
                <h2>WorkSpace</h2>
                <p className="text-sm text-shadegray-200">จัดการธุรกิจครบวงจร</p>
              </Button>
            </Link>
            <Link href="/marketplaces">
              <Button variant="ghost" className="w-full items-start flex flex-col h-fit">
                <h2>Marketplaces</h2>
                <p className="text-sm text-shadegray-200">เชื่อมต่อ Shopee, Lazada, TikTok และอื่นๆ</p>
              </Button>
            </Link>
            <Link href="/webbuilder">
              <Button variant="ghost" className="w-full items-start flex flex-col h-fit">
                <h2>Web Builder</h2>
                <p className="text-sm text-shadegray-200">ระบบสร้างเว็บไซต์</p>
              </Button>
            </Link>
            <Link href="/crm">
              <Button variant="ghost" className="w-full items-start flex flex-col h-fit">
                <h2>Line CRM</h2>
                <p className="text-sm text-shadegray-200">Points and Rewards</p>
              </Button>
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <Link href="/webstore">
              <Button variant="ghost" className="w-full items-start flex flex-col h-fit">
                <h2>Storefront</h2>
                <p className="text-sm text-shadegray-200">เปิดเว็บขายสินค้า</p>
              </Button>
            </Link>
            <Link href="/coming-soon">
              <Button variant="ghost" className="w-full items-start flex flex-col h-fit">
                <h2>WorkDay</h2>
                <p className="text-sm text-shadegray-200">Project management</p>
              </Button>
            </Link>
          </div>
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