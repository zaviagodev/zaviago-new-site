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
                <NavigationMenuItem key={menu.title}>
                  {menu.content ? (
                    <div className="relative">
                      <NavigationMenuTrigger>{menu.title}</NavigationMenuTrigger>
                      <NavigationMenuContent className="p-6">
                        {menu.content}
                      </NavigationMenuContent>
                    </div>
                  ) : (
                    <Link href={menu.link} legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>{menu.title}</NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        <Button variant="ghost">Sign in</Button>
      </div>
    </header>
  )
}

export default Header