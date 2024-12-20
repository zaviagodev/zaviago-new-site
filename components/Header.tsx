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

interface MenusProps {
  title: string
  link: string
  content?: ReactNode
}

const Header = () => {
  const menus: MenusProps[] = [
    {
      title: "Our Products",
      link: "/products"
    },
    {
      title: "TEST",
      link:"/test",
      content:(
        <>HUH?!</>
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
                      <NavigationMenuContent className="p-6">
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
        </div>
      </div>
    </header>
  )
}

export default Header