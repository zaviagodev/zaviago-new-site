"use client"

import MainDashboard from "@/components/dashboard/main-dashboard"
import ProductCard from "@/components/ecommerce/product-card"
import ProductDashboard from "@/components/ecommerce/product-dashboard"
import SingleProduct from "@/components/ecommerce/single-product"
import ImgPlaceholder from "@/components/ImgPlaceholder"
import { Button } from "@/components/ui/button"
import { twoColumnsMotion } from "@/lib/utils"
import headphoneImg from "@/public/mock-products/headphone.png"
import { motion } from "framer-motion"

const WebstorePage = () => {
  return (
    <section className="flex flex-col gap-10 py-20">
      <section className="flex flex-col gap-10 items-center">
        <div className="flex flex-col text-center font-semibold">
          <h2 className="text-3xl">เปิดร้านออนไลน์</h2>
          <h1 className="text-[180px] leading-[150px]">ใหม่ของคุณ</h1>
        </div>

        <motion.aside className="overflow-hidden relative shadow-main rounded-lg" initial={{ scale:0.1, opacity:0, top:-300 }} animate={{ scale:1, opacity:1, top:0 }} transition={{ duration:1.5 }}>
          <SingleProduct imgSrc={headphoneImg} title="Headphone"/>
        </motion.aside>

        <Button>เปิดเว็บฟรี</Button>
      </section>

      <section className="flex flex-col gap-10 items-center py-20">
        <p className="text-shadegray font-semibold text-center">สร้างร้านค้าออนไลน์ให้แบรนด์คุณเอง<br/>ต่อระบบสะสมแต้มและฟีเจอร์อื่นๆอีกมากมาย</p>

        <div className="flex items-center main-container">
          <ProductCard imgSrc={headphoneImg} title="Headphone" category="Pomelo" cardClassName="-mr-8 relative z-2 scale-[0.9]"/>
          <ProductCard imgSrc={headphoneImg} title="Headphone" category="Adidas" cardClassName="-mr-8 relative z-3 scale-[0.95]"/>
          <ProductCard imgSrc={headphoneImg} title="Headphone" category="Nike" cardClassName="m-0 relative z-4"/>
          <ProductCard imgSrc={headphoneImg} title="Headphone" category="Nanyang" cardClassName="-ml-8 relative z-3 scale-[0.95]"/>
          <ProductCard imgSrc={headphoneImg} title="Headphone" category="Edifier" cardClassName="-ml-8 relative z-2 scale-[0.9]"/>
        </div>
      </section>

      <section className="flex flex-col gap-10 py-20 small-container">
        <h2 className="text-4xl font-semibold">พร้อมฟีเจอร์เว็บแอปทันสมัย ที่คุณเองก็สร้างได้</h2>
        <p className="font-medium text-xl text-left text-shadegray-200">เหนือกว่าคู่แข่งของคุณด้วย เว็บไซต์ / ซูเปอร์แอป ของคุณเอง โดยใช้เครื่องมือต่างๆที่มีในระบบ <span className="text-shadegray-400">เช่น สะสมแต้ม, ตะกร้าสินค้า, หัวใจสินค้า, สะสมคูปองแลกของรางวัล,</span> เก็บฐานข้อมูล และใช้งานง่าย ผ่านบัตรสมาชิกในแอ๊บ</p>
      </section>

      <section className="flex flex-col gap-10 py-20 main-container">
        <div className="bg-shadewhite-200 rounded-xl p-10">
          <h2 className="text-4xl font-semibold">ระบบลองรับการสร้างหน้าร้านออนไลน์ได้ดั่งใจ ปรับแต่งได้อย่างเต็มที่</h2>
          <p>TEST</p>
        </div>
        <div className="bg-shadewhite-200 rounded-xl p-10 flex flex-col gap-3">
          <h2 className="text-4xl font-semibold">โชว์ และ จัดการสินค้า Catalogs อย่างง่ายดาย</h2>
          <p className="font-medium text-xl text-left text-shadegray-200">เรามีระบบให้คุณพร้อมขายได้ทันที สะดวก ง่าย ครบจบในที่เดียว ตั้งแต่การสั่งซื้อสินค้า การชำระเงิน ไปจนถึงการจัดส่ง จะขายหลายช่องทางก็ไม่มีปัญหา</p>
          <aside className="overflow-hidden relative shadow-main rounded-lg">
            <ProductDashboard />
          </aside>
        </div>

        <aside className="overflow-hidden relative shadow-main rounded-lg">
          <MainDashboard />
        </aside>
      </section>

      <motion.div className="small-container font-medium text-2xl text-left text-shadegray-200 grid md:grid-cols-2 gap-4 pt-20" {...twoColumnsMotion}>
        <h2 className="p-12">รวมทุกฟีเจอร์ การจัดการธุรกิจ ออนไลน์และออฟไลน์ <span className="text-mainpurple">จัดการคำสั่งซื้ออย่างเป็นระบบ</span> สุดปังกับฟีเจอร์ที่ครอบคลุมทุกรูปแบบ</h2>
        <h2 className="p-12">ไม่ว่าคุณจะมีกี่ช่องทางการขายก็<span className="text-mainpurple">จัดการได้ ช่วยลดเวลาในการทำงาน และเพิ่มโอกาส</span>ในการสร้างกำไร</h2>
      </motion.div>

      <section className="!p-40 grid md:grid-cols-2 main-container items-center gap-10">
        <p className="font-medium text-xl text-left text-shadegray-200">หน้าเว็บแบบ Responsive Design รองรับทุกหน้าจอ <span className="text-shadegray-400">ทั้ง Desktop และ Mobile ไม่ว่าจะเปิดร้านจากหน้าจออุปกรณ์ไหน ๆ</span> ก็ใช้งานได้อย่างสมบูรณ์และเหมาะสม</p>

        <ImgPlaceholder height="600px">
          <p className="text-center">IMAGES OF COUPON CODE</p>
        </ImgPlaceholder>
      </section>

      <section className="bg-[#1D1D1F] py-20">
        <div className="flex flex-col gap-10 main-container">
          <h1 className="sub-header font-semibold !text-white">มากมายหลากหลายฟีเจอร์ และยังจะมีเพิ่มมาอีกเรื่อยๆ</h1>
          <p className="font-medium text-xl text-left text-shadegray-200">เปิดระบบเก็บสะสมคูปองเหมือน Shopee และ Lazada รองรับการชำระเงินจากหลายช่องทางเช่น 
          PromptPay , TrueMoney, CreditCard เพิ่มระบบ Order Tracking และ หน้าแบนเนอร์รวมโปรโมชั่นและ
          ของขวัญต่าง ๆ ได้อีกด้วย</p>
          <ImgPlaceholder height="600px">
            <p className="text-center">IMAGES OF COUPON CODE</p>
          </ImgPlaceholder>
        </div>
      </section>

      <section className="small-container">
        <div className="flex gap-5">
          <ImgPlaceholder height="500px">
            <p className="text-center">ONE VIDEO Placeholder</p>
          </ImgPlaceholder>
          <ImgPlaceholder height="500px">
            <p className="text-center">ONE VIDEO Placeholder</p>
          </ImgPlaceholder>
        </div>
      </section>

      <motion.div className="small-container font-medium text-2xl text-left text-shadegray-200 grid md:grid-cols-2 gap-4" {...twoColumnsMotion}>
        <h2 className="p-12">หน้าสั่งซื้อสินค้าที่ สวยงาม ทันสมัย ใช้งานง่าย ยืดหยุ่นกว่าเดิม เพิ่มยอดด้วยความเร็วที่สูง ลดการโหลดข้อมูลช้า</h2>
        <h2 className="p-12">ทุกออเดอร์จะถูกสร้างเป็นบิลออนไลน์ ลูกค้าสามารถดูรายละเอียด จ่ายเงิน ติดตามสถานะสินค้าได้อย่างสะดวกสบาย</h2>
      </motion.div>
    </section>
  )
}

export default WebstorePage