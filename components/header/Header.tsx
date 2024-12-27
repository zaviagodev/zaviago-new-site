"use client"

import Link from "next/link"
import { ZaviagoFullLogo } from "../images/ZaviagoLogo"
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
import { Button } from "../ui/button"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import MobileSidebarMenu from "./MobileSidebarMenu"
import { menus } from "./menus"

const Header = () => {
  const { setTheme, theme } = useTheme()
  const handleSwitchTheme = () => setTheme(theme === "light" ? "dark" : "light")

  return (
    <header className="header" style={{backdropFilter:"blur(10px)"}}>
      <div className="main-container flex items-center justify-between">
        <nav className="flex items-center">
          <Link href="/">
            <ZaviagoFullLogo />
          </Link>
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList>
              {menus.map(menu => (
                <NavigationMenuItem key={menu.title} className="text-[#687076] hover:text-black">
                  {menu.content ? (
                    <div className="relative">
                      <NavigationMenuTrigger className="!bg-transparent">{menu.title}</NavigationMenuTrigger>
                      <NavigationMenuContent className="p-4 left-0 !w-[600px]">
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
        <div>
          <div className="hidden lg:flex items-center gap-6">
            <Button variant="ghost" className="!bg-transparent text-[#687076] hover:text-black">Sign in</Button>
            <Link href="https://dashboard.zaviago.com" className="purple-button">Register</Link>
            {theme && (
              <Button onClick={handleSwitchTheme} variant="ghost">
                <Sun className="dark:hidden"/>
                <Moon className="hidden dark:block"/>
              </Button>
            )}
          </div>
          <div className="lg:hidden flex items-center">
            <MobileSidebarMenu />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header