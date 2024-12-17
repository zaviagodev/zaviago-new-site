import Link from "next/link"
import { ZaviagoFullLogo } from "./images/ZaviagoLogo"
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"

interface MenuCompProps {
    trigger: string
    link?: string
}

const Header = () => {
    return (
      <header className="flex items-center px-10 py-[5px] h-[70px] bg-[#FFFFFF52] fixed top-0 left-0 w-full opacity-1" style={{backdropFilter:"blur(10px)"}}>
        <Link href="/">
          <ZaviagoFullLogo />
        </Link>
        <Menubar className="border-0" >
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                    New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>New Window</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Share</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Print</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
        </Menubar>  
      </header>
    )
}

export default Header