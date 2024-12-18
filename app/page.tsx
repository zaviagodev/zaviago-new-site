import MainDashboard from "@/components/dashboard/main-dashboard";
import finlab from "@/public/finlab.png"
import uob from "@/public/uob.png"
import depa from "@/public/depa.png"
import nstda from "@/public/nstda.png"
import Image from "next/image";

export default function Home() {
  const trustedBrands = [
    { img:finlab, alt:"Finlab", className:"h-6 w-auto" },
    { img:uob, alt:"UOB", className:"h-4 w-auto" },
    { img:depa, alt:"Depa", className:"h-8 w-auto" },
    { img:nstda, alt:"nstda", className:"h-8 w-auto" }
  ]
  return (
    <section className="flex flex-col gap-10">
      <section className="flex flex-col gap-10 text-center">
        <h1>IMAGE WILL BE PASTED SOON!</h1>
        <h1 className="text-[78px] font-semibold leading-[1.2em] tracking-[-0.8px]">
          จัดการงานและธุรกิจ<br/>
          <span className="text-[#3d08ff]">ทั้งหมด</span>
          ของคุณ
        </h1>
        <p className="text-shadegray font-semibold">แพลตฟอร์ม WorkSuite ตั้งแต่จัดการธุรกิจ จัดการโปรเจ็ค, สร้างเว็บไซต์, ขายสินค้า , <br/>จัดการคำสั่งซื้อ ระบบ CRM และ Point & Reward จนถึง ระบบรวมแชท</p>

        <aside className="overflow-hidden relative shadow-main rounded-lg">
          <MainDashboard />
        </aside>
      </section>

      <section className="max-w-[900px] mx-auto w-full flex flex-col gap-20">
        <div className="flex gap-12 items-center w-full">
          <p className="text-xs text-gray-500 font-medium">Trusted by industry leaders and innovators</p>
          <ul className="flex justify-between items-center w-full">
            {trustedBrands.map(brand => <Image key={brand.alt} src={brand.img} alt={brand.alt} className={brand.className}/>)}
          </ul>
        </div>
        {/* Integrate with business management system, orders, stocks, customers for every platform */}
        <h1 className="text-[56px] font-semibold leading-[1.2em] tracking-[-0.8px]">ระบบ <span className="text-[#3d08ff]">จัดการธุรกิจ</span> ออเดอร์,<br/> สต็อก, ลูกค้า , เชื่อมต่อได้ทุก<br/>แพลตฟอร์ม</h1>
      </section>
    </section>
  );
}
