import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { InvestmentThesisProps } from "../data"
import { cn } from "@/lib/utils"

const InvestmentThesis = (
  { id, title, desc, accordionTitle, accordionDesc } : InvestmentThesisProps
) => {
  return (
    <section className={cn("text-white bg-black pt-20 pb-40 sticky top-20 h-screen", {"border-t border-t-shadegray-300": id !== 1})}>
    <div className="grid md:grid-cols-2 gap-[90px] max-w-[1100px] w-full mx-auto">
      <div className="flex justify-between">
        <h1 className="text-[240px] leading-[150px] font-semibold">{id}</h1>
        <p>{title}</p>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-5xl font-medium">{desc}</h1>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value={accordionTitle}>
            <AccordionTrigger>{accordionTitle}</AccordionTrigger>
            <AccordionContent>
              {accordionDesc}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </section>
  )
}

export default InvestmentThesis