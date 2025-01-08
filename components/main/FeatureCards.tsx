"use client"

import { Card } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Box, CheckCircle, CircleUserRound, Clipboard, Crown, Dot, Gift, HandCoins, List, PlusCircle, ReceiptText, Settings, ShoppingBag, SquarePen, Tag, Ticket, Trophy, Truck, Warehouse } from "lucide-react"
import { ReactNode } from "react"
import { motion } from "framer-motion"

interface FeatureCardProps {
  title: string
  icon?: ReactNode
}

interface FeatureCardListsProps extends FeatureCardProps {
  sublist?: FeatureCardProps[]
}

const FeatureCards = () => {
  const iconClassName = "h-4 w-4";
  const feature_card_list: FeatureCardListsProps[] = [
    {
      title:"สินค้า",
      icon: <ShoppingBag className={iconClassName}/>,
      sublist: [
        {
          title:"สินค้าของคุณ",
          icon:<Box className={iconClassName}/>
        },
        {
          title:"เพิ่มสินค้าใหม่",
          icon:<PlusCircle className={iconClassName}/>
        },
        {
          title:"สินค้าในช่องทางต่างๆ",
          icon:<PlusCircle className={iconClassName}/>
        },
        {
          title:"หมวดหมู่สินค้า",
          icon:<PlusCircle className={iconClassName}/>
        },
        {
          title:"หมวดหมู่ยี่ห้อ",
          icon:<PlusCircle className={iconClassName}/>
        },
        {
          title:"คลังสินค้า",
          icon:<Warehouse className={iconClassName}/>
        },
        {
          title:"คุณลักษณะของสินค้า",
          icon:<Tag className={iconClassName}/>
        }
      ]
    },
    {
      title:"การค้าขาย",
      icon: <ShoppingBag className={iconClassName}/>,
      sublist: [
        {
          title:"คำสั่งซื้อ",
          icon:<SquarePen className={iconClassName}/>
        },
        {
          title:"การแจ้งโอนเงิน",
          icon:<CheckCircle className={iconClassName}/>
        },
        {
          title:"ช่องทางการขาย",
          icon:<Clipboard className={iconClassName}/>
        },
        {
          title:"การจัดส่ง",
          icon:<Truck className={iconClassName}/>
        },
        {
          title:"คืนสินค้า",
          icon:<ReceiptText className={iconClassName}/>  
        },
        {
          title:"ลูกค้า",
          icon:<CircleUserRound className={iconClassName}/>  
        }
      ]
    },
    {
      title:"การตลาด",
      icon: <ShoppingBag className={iconClassName}/>,
      sublist: [
        {
          title:"โค้ดส่วนลด",
          icon:<Ticket className={iconClassName}/>,
        },
        {
          title:"โปรโมชันส่วนลด",
          icon:<Dot className={iconClassName}/>
        },
        {
          title:"Bundle Deal",
          icon:<Dot className={iconClassName}/>
        },
        {
          title:"Add-on Deal",
          icon:<Dot className={iconClassName}/>
        },       
        {
          title:"Flash Sales",
          icon:<Dot className={iconClassName}/>
        }
      ]
    },
    {
      title:"ระบบแต้มและรางวัล",
      icon: <Crown className={iconClassName}/>,
      sublist: [
        {
          title:"Loyalty Program",
          icon:<Crown className={iconClassName}/>,
        },
        {
          title:"แลกซื้อผ่านแต้ม",
          icon:<HandCoins className={iconClassName}/>
        },
        {
          title:"ระดับลูกค้า",
          icon:<Trophy className={iconClassName}/>
        },
        {
          title:"ของรางวัล",
          icon:<Gift className={iconClassName}/>
        },
        {
          title:"ตั้งค่า Point",
          icon:<Settings className={iconClassName}/>
        }
      ]
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
      {feature_card_list.map(list => (
        <motion.div className="h-full">
          <Card key={list.title} className="!p-6 h-full w-full shadow-featurecard">
            <Accordion type="single" className="w-full" defaultValue={list.title}>
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
        </motion.div>
      ))}
    </div>
  )
}

export default FeatureCards