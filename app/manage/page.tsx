import MainDashboard from "@/components/dashboard/main-dashboard"
import CustomerDashboard from "@/components/ecommerce/customer-dashboard"
import Printing from "@/components/ecommerce/printing"
import ProductDashboard from "@/components/ecommerce/product-dashboard"
import ImgPlaceholder from "@/components/ImgPlaceholder"
import FeatureCards from "@/components/main/FeatureCards"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ReactNode } from "react"

interface ServiceCardProps {
  title: string
  desc: string
  content?: ReactNode
}

const service_cards: ServiceCardProps[] = [
  {
    title:"จัดการคำสั่งซื้ออย่างเป็นระบบ",
    desc:"ติดตาม จัดการ และทำให้กระบวนการจัดการคำสั่งซื้อเป็นแบบอัตโนมัติ พร้อมความยืดหยุ่นในการตั้งค่ากระบวนการสั่งซื้อแบบเฉพาะตัว สร้างเวิร์กโฟลว์ที่กำหนดเองได้ มาพร้อมระบบ WMS ในตัวอีกด้วย",
    content: (<aside className="overflow-hidden relative shadow-main rounded-lg">
      <MainDashboard />
    </aside>)
  },
  {
    title:"เปิดเว็บขายสินค้า พร้อมเชื่อม LineOA",
    desc:"สร้างการชำระเงินที่ไม่เหมือนใคร ด้วยโมดูลตะกร้าสินค้าที่รองรับทุกบริบทของการขาย",
    content: (
      <ImgPlaceholder height="600px">
      </ImgPlaceholder>
    )
  },
  {
    title:"รวมการขายจากทุกช่องทาง",
    desc:"ขับเคลื่อนช่องทางการขายที่หลากหลาย พร้อมควบคุมการจัดประเภทสินค้า คลังสินค้า และคำสั่งซื้อของแต่ละช่องทางได้อย่างมีประสิทธิภาพ",
    content: (
      <ImgPlaceholder height="600px">
      </ImgPlaceholder>
    )
  },
  {
    title:"แคตตาล็อกสินค้าของคุณ",
    desc:"จัดการผลิตภัณฑ์และรูปแบบต่างๆ นับพันรายการได้อย่างง่ายดายด้วย หมวดหมู่ขั้นสูง และหน้าผลิตภัณฑ์ที่ใช้งานง่าย",
    content: (
      <ImgPlaceholder height="600px">
      </ImgPlaceholder>
    )
  },
  {
    title:"รองรับการพิมพ์งานเอกสาร งานภาษี และเอกสารอื่นๆ",
    desc:"For printing",
    content: (
      <aside className="overflow-hidden relative shadow-main rounded-lg">
        <Printing />
      </aside>
    )
  },
  {
    title:"เก็บข้อมูลลูกค้า เพื่อทำการการตลาด",
    desc:"รองรับลูกค้าทุกประเภท ตั้งแต่ลูกค้า B2C ที่มีตัวเลือกบริการตนเอง ไปจนถึงบัญชี B2B และกลุ่มลูกค้าที่มีการกำหนดค่าผลิตภัณฑ์และราคาพิเศษ ทั้งหมดสามารถกำหนดค่าได้โดยตรงจากระบบจัดการของคุณ",
    content: (
      <aside className="overflow-hidden relative shadow-main rounded-lg">
        <CustomerDashboard />
      </aside>
    )
  },
  {
    title:"สต็อกอัปเดตเรียลไทม์ พร้อมฟีเจอร์ เช็คการเข้า - ออกของสินค้าในโกดัง",
    desc:"จัดการสินค้าคงคลังได้อย่างง่ายดาย ครอบคลุมทั้งช่องทางการขายและคลังสินค้าหลายแห่ง พร้อมรับภาพรวมของสต็อกสินค้าแบบเรียลไทม์",
    content: (
      <aside className="overflow-hidden relative shadow-main rounded-lg">
        <ProductDashboard />
      </aside>
    )
  },
  {
    title:"ตั้งค่าราคาขายที่ซับซ้อนได้",
    desc:"เครื่องมือตั้งราคาที่เปิดกว้างและปรับแต่งได้ พร้อมตัวเลือกการตั้งราคาตามเงื่อนไขสำหรับโปรโมชัน, ราคาเฉพาะลูกค้า และอื่นๆ",
    content: (
      <ImgPlaceholder height="600px">
      </ImgPlaceholder>
    )
  },
  {
    title:"เกตเวย์การชำระเงิน",
    desc:"เพิ่มการทำธุรกรรมและการชำระเงิน รวมถึงการเชื่อมต่อกับเกตเวย์การชำระเงินต่างๆ ในไทย",
    content: (
      <ImgPlaceholder height="600px">
      </ImgPlaceholder>
    )
  }
]

const ManagePage = () => {
  return (
    <section className="flex flex-col gap-10 pt-20">
      <section className="flex flex-col gap-10 text-center text-shadegray-400 px-10">
        <h1 className="text-[42px] md:text-[78px] font-semibold leading-[1.2em] tracking-[-0.8px]">
          ระบบจัดการธุรกิจ<br/>ครบวงจร
        </h1>
        <p className="font-semibold">จัดการธุรกิจตั้งแต่  สต๊อก - คำสั่งซื้อ - เว็บขายสินค้า - <br/>ช่องทางการขาย - ลูกค้าและการตลาดในแพลตฟอร์มเดียว</p>

        <aside className="overflow-hidden relative shadow-main rounded-lg">
          <MainDashboard />
        </aside>
      </section>

      <section className="flex flex-col gap-10 px-10 pt-40 pb-10 main-container">
        <h1 className="text-4xl font-semibold leading-[1.2em] tracking-[-0.8px] text-black">รวมทุกฟีเจอร์ การจัดการธุรกิจ ออนไลน์และออฟไลน์</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          <FeatureCards />
        </div>
      </section>

      <section className="flex flex-col gap-10 px-10 main-container">
        {service_cards.map(card => (
          <Card key={card.title}>
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.desc}</CardDescription>
            </CardHeader>
            {card.content && (
              <CardContent>
                {card.content}
              </CardContent>
            )}
          </Card>
        ))}
      </section>
    </section>
  )
}

export default ManagePage