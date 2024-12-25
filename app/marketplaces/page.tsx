import ViewMoreSheet from "@/components/main/ViewMoreSheet"
import { ImgList, orderManagementSystems } from "../data"

const MarketplacesPage = () => {
  return (
    <section className="flex flex-col gap-10 pt-20">
      <section className="flex flex-col gap-10 text-center text-shadegray-400 px-10">
        <h1 className="text-[42px] md:text-[78px] font-semibold leading-[1.2em] tracking-[-0.8px]">
          เชื่อมต่อการขายทุกแพลตฟอร์ม
        </h1>
        <p className="font-semibold">SHOPEE - LAZADA - LINE - TIKTOK - WEBSITE - HEART</p>
      </section>

      <section className="flex flex-col items-center gap-10 small-container">
        <h1 className="text-[42px] md:text-[78px] font-semibold leading-[1.2em] tracking-[-0.8px]">
          Make it yours
        </h1>
        <p className="text-shadegray font-semibold">ระบบจัดการสต๊อกสินค้าออนไลน์ที่สามารถเชื่อมต่อกับทุก Marketplace เช่น Lazada, Shopee และ TikTok Shop</p>

        <div className="flex flex-col gap-5 w-full items-center">
          <p className="text-xs text-shadegray-200 font-medium">ใช้แทนระบบอื่นเช่น</p>
          <ul className="flex items-center gap-8 w-full justify-center">
            <ImgList list={orderManagementSystems}/>
          </ul>
        </div>

        <p className="text-center">IMAGE ABOUT PRODUCT STOCK</p>
      </section>

      <section className="small-container">
        <div className="font-medium text-2xl text-shadegray-200 grid md:grid-cols-2 gap-4">
          <h2 className="p-12">ไม่ว่าคุณจะมีกี่ช่องทางการขายก็สามารถจัดการออเดอร์ได้อย่างเป็นระบบ โดยคุณ<span className="text-shadegray-400">สามารถรวมออเดอร์จากทุกช่องทางการขาย</span>มาไว้ในที่เดียว</h2>
          <h2 className="p-12">จัดการสต๊อก อัพเดทอัตโนมัติ ช่วยให้คุณอัปเดตสต๊อกสินค้าได้แบบเรียลไทม์ <span className="text-shadegray-400">สรุปรายงานข้อมูลสำคัญที่เข้าใจง่าย</span>และช่วยสร้างการเติบโตให้กับธุรกิจของคุณ</h2>
        </div>

        <ViewMoreSheet buttonText="ระบบรวมออเดอร์ คืออะไร" title="Points and Rewards" desc="ระบบจัดการงานธุรกิจทั้งหมดของคุณในที่เดียว">
            HEY
        </ViewMoreSheet>
      </section>

      <section className="small-container">
        <h1 className="text-[42px] md:text-[56px] font-semibold leading-[1.2em] tracking-[-0.8px] text-center">
          คำสั่งซื้อมารวมกันในที่เดียว
        </h1>
        <p className="text-center">IMAGE ABOUT SALES INVOICES OR ORDERS</p>
        <div className="font-medium text-2xl text-shadegray-200 grid md:grid-cols-2 gap-4">
          <h2 className="p-12">จัดการออเดอร์ออนไลน์จาก <span className="text-shadegray-400">Lazada Shopee และ TikTok Shop ซึ่งผู้ขายสามารถกด Ready to ship</span> ด้วยระบบจัดการคำสั่งซื้อ ได้เลยในที่เดียว</h2>
          <h2 className="p-12">รับออเดอร์ออนไลน์ และรวมออเดอร์จาก Social Commerce อย่าง Facebook และ <span className="text-shadegray-400">LINE พร้อมเปิดบิลสร้างรายการขายได้เลยทันที</span>แบบไม่ต้องสลับหน้าจอ</h2>
        </div>
      </section>

      <section className="bg-[#F7F7F7] py-20">
        <div className="flex flex-col items-center gap-10 max-w-[900px] mx-auto w-full">
          <h1 className="text-[42px] md:text-[56px] font-semibold leading-[1.2em] tracking-[-0.8px] text-center">
            Sync ข้อมูลสินค้าทั้งหมด
          </h1>
          <p className="font-semibold text-shadegray text-xl text-center">ไม่ต้องตามไปแก้ไขข้อมูลในทุก ๆ ที่ เพียงแก้ไขข้อมูลสินค้า เพียงครั้งเดียว ข้อมูลในทุกที่ก็จะอัพเดทอัตโนมัติ</p>
          <p className="text-center">IMAGE ABOUT SALES INVOICES OR ORDERS</p>
          <div className="font-medium text-2xl text-shadegray-200 grid md:grid-cols-2 gap-4">
            <h2 className="p-12">เชื่อมต่อได้หลายร้านในระบบเดียว ช่วยคุณจัดการทุกการทำงานต่างๆของร้านของคุณ</h2>
            <h2 className="p-12">เชื่อมต่อง่ายๆเพียงล๊อกอินเข้าร้านของคุณและเริ่มใช้งานได้เลย</h2>
          </div>
        </div>

        <p className="text-center">IMAGE ABOUT LAZADA STORE INVENTORY</p>

        <h2 className="text-center font-medium text-xl text-shadegray-200">แยกหรือรวมการจัดการสต๊อกต่างๆในแต่ละช่องทางการขายได้ด้วยระบบ WMS <br/>ช่วยให้คุณจัดการสต๊อกได้อย่างเป็นระบบ</h2>
      </section>

      <section className="small-container grid md:grid-cols-2">
        <div className="flex flex-col items-center gap-10 small-container">
          <h1 className="text-[42px] md:text-[56px] font-semibold leading-[1.2em] tracking-[-0.8px]">
            ง่ายกว่า wix, ใช้งานเหมือน Canva ก็เรานี่แหละ
          </h1>
          <p className="font-semibold text-shadegray text-xl">เชื่อมต่อได้หลายร้านในระบบเดียว ช่วยคุณจัดการทุกการทำงานต่างๆของร้านของคุณ</p>
        </div>

        <p className="text-right">IMAGE OF SITES</p>
      </section>
    </section>
  )
}

export default MarketplacesPage