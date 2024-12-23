import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Box, PlusCircle, ShoppingBag } from "lucide-react"
import { ReactNode } from "react"

interface FeatureCardProps {
  title: string
  icon?: ReactNode
}

interface FeatureCardListsProps extends FeatureCardProps {
  sublist?: FeatureCardProps[]
}

const feature_card_list: FeatureCardListsProps[] = [
  {
    title:"สินค้า",
    icon: <ShoppingBag />,
    sublist: [
      {
        title:"สินค้าของคุณ",
        icon:<Box />
      },
      {
        title:"เพิ่มสินค้าใหม่",
        icon:<PlusCircle />
      }
    ]
  },
  {
    title:"การค้าขาย",
    icon: <ShoppingBag />,
    sublist: [
      {
        title:"สินค้าของคุณ",
        icon:<Box />
      },
      {
        title:"เพิ่มสินค้าใหม่",
        icon:<PlusCircle />
      }
    ]
  }
]

const FeatureCards = () => {
  return (
    <>
      {feature_card_list.map(list => (
        <Card key={list.title} className="!p-6 w-full">
          <Accordion type="single" className="w-full">
            <AccordionItem value={list.title} className="border-0">
                <AccordionTrigger className="p-0">
                  <div className="flex items-center gap-2">
                    {list.icon}
                    {list.title}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="p-0 pt-4">
                  <ul className="pl-4 flex flex-col gap-4">
                    {list.sublist?.map(l => (
                      <li key={l.title} className="flex items-center gap-2">
                        {l.icon}
                        {l.title}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>
      ))}
    </>
  )
}

export default FeatureCards