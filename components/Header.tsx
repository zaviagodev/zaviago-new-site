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
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

interface MenuCompProps {
    trigger: string
    link?: string
}

const Header = () => {
  return (
    <header className="flex items-center px-10 py-[5px] h-[70px] bg-[#FFFFFF52] fixed top-0 left-0 w-full opacity-1 z-[99]" style={{backdropFilter:"blur(10px)"}}>
      <Link href="/">
        <ZaviagoFullLogo />
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="p-6">
                <NavigationMenuLink>Link</NavigationMenuLink>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  )
}

export default Header