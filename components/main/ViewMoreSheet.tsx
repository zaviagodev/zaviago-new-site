import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { Plus } from "lucide-react"
import { ReactNode } from "react"

interface ViewMoreSheetProps {
  children: ReactNode
  buttonText: string
  title: string
  desc?: string
  contentClassName?: string
}

const ViewMoreSheet = ({ children, buttonText, title, desc, contentClassName } : ViewMoreSheetProps) => {
  return (
    <Sheet>
      <SheetTrigger className="flex items-center gap-4 backdrop-blur sticky bottom-8 bg-[#424245b3] w-fit mx-auto text-white pl-6 pr-2.5 rounded-full h-[56px]">
        {buttonText}
        <div className="bg-[#0171E3] text-[#D3E1FA] h-9 w-9 rounded-full flex items-center justify-center">
          <Plus />
        </div>
      </SheetTrigger>
      <SheetContent side="bottom" className={cn("max-w-[1100px] m-auto h-full top-20 rounded-3xl p-0", contentClassName)}>
        <SheetHeader className="p-20">
          <SheetTitle>{title}</SheetTitle>
          {desc ? <SheetDescription>{desc}</SheetDescription> : null}
        </SheetHeader>
        {children}
      </SheetContent>
    </Sheet>
  )
}

export default ViewMoreSheet