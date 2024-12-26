import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Menu } from "lucide-react"
import { menus } from "./menus"
import Link from "next/link"
import { Button } from "../ui/button"
import { ZaviagoFullLogo } from "../images/ZaviagoLogo"

const MobileSidebarMenu = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent side="top" className="px-10 flex flex-col gap-6">
        <SheetTitle>
          <ZaviagoFullLogo />
        </SheetTitle>
        <nav className="flex flex-col gap-2">
          {menus.map(menu => (
            <>
              {menu.content ? (
                <Accordion type="single" collapsible key={menu.title}>
                  <AccordionItem value={menu.title} className="!border-b-0">
                    <AccordionTrigger className="text-sm px-4 py-2">{menu.title}</AccordionTrigger>
                    <AccordionContent>
                      {menu.content}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ) : (
                <Link href={menu.link} key={menu.link}>
                  <Button variant="ghost" className="w-full justify-start">{menu.title}</Button>
                </Link>
              )}
            </>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileSidebarMenu