"use client"

import Link from "next/link"
import { ZaviagoFullLogo } from "./images/ZaviagoLogo"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { ReactNode } from "react"
import { Button } from "./ui/button"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

interface MenusProps {
  title: string
  link: string
  content?: ReactNode
}

const Header = () => {
  const { setTheme, theme } = useTheme()
  const handleSwitchTheme = () => {
    if (theme && theme === "light"){
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  const menus: MenusProps[] = [
    {
      title: "Our Products",
      link: "/products"
    },
    {
      title: "Features",
      link:"/test",
      content:(
        <div className="flex flex-col gap-2">
          <Link href="/manage">
            <Button variant="ghost" className="w-full justify-start">Manage</Button>
          </Link>
          <Link href="/marketplaces">
            <Button variant="ghost" className="w-full justify-start">Marketplaces</Button>
          </Link>
        </div>
      )
    },
    {
      title: "About us",
      link:"/test",
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
  return (
    <header className="header" style={{backdropFilter:"blur(10px)"}}>
      <div className="main-container flex items-center justify-between">
        <nav className="flex items-center">
          <Link href="/">
            <ZaviagoFullLogo />
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              {menus.map(menu => (
                <NavigationMenuItem key={menu.title} className="text-[#687076] hover:text-black">
                  {menu.content ? (
                    <div className="relative">
                      <NavigationMenuTrigger className="!bg-transparent">{menu.title}</NavigationMenuTrigger>
                      <NavigationMenuContent className="p-4 left-0">
                        {menu.content}
                      </NavigationMenuContent>
                    </div>
                  ) : (
                    <Link href={menu.link} legacyBehavior passHref>
                      <NavigationMenuLink className={`${navigationMenuTriggerStyle()} !bg-transparent`}>{menu.title}</NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        <div className="flex items-center gap-6">
          <Button variant="ghost" className="!bg-transparent text-[#687076] hover:text-black">Sign in</Button>
          <Link href="https://dashboard.zaviago.com" className="purple-button">Register</Link>
          {theme && (
            <Button onClick={handleSwitchTheme} variant="ghost">
              {theme === "light" ? <Sun /> : <Moon />}
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header