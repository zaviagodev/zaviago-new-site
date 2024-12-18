import MainDashboard from "@/components/dashboard/main-dashboard"
import { textGradient } from "@/lib/utils"

const Products = () => {
  return (
    <section>
      <header className="py-10 border-y">
        <div className="flex items-center justify-between main-container">
          <h1 className="text-3xl font-semibold">Our Products</h1>
          <h2 className="text-shadegray-300 text-xl font-medium">ระบบที่สร้างมาให้ช่วยธุรกิจคุณ</h2> {/* The system built for helping your businesses */}
        </div>
      </header>

      <section className="p-10 bg-[#FCFBFE] flex flex-col gap-10">
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold" style={textGradient("linear-gradient(121deg, rgb(0, 117, 224) 9.82214%, rgb(112, 64, 185) 38.0971%, rgb(158, 0, 233) 72.8491%, rgb(158, 0, 233) 100%)")}>Highly recommended</h2>
          <h1 className="text-3xl md:text-[56px] font-semibold leading-[1.2em] tracking-[-0.8px] text-black">Workspace</h1>
          <p>ระบบจัดการงานธุรกิจทั้งหมดของคุณในที่เดียว</p>
        </div>
        <aside className="overflow-hidden relative shadow-main rounded-lg">
          <MainDashboard />
        </aside>
      </section>

      <section className="main-container py-10">
        <h1 className="text-4xl font-semibold leading-[1.2em] tracking-[-0.8px] text-black">ทำความรู้จักกับระบบต่างๆของเรา...</h1> {/* Translate: Introducing our systems... */}
      </section>

      <section className="p-10 bg-[#F5F5F7] flex flex-col gap-10">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl md:text-[56px] font-semibold leading-[1.2em] tracking-[-0.8px] text-black">Point-Rewards</h1>
          <p>ระบบสะสมแต้มและแลกของรางวัลผ่าน LineOA</p>
        </div>
      </section>

      <section className="p-10 bg-[#FCFBFE] flex flex-col gap-10">
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold" style={textGradient("linear-gradient(121deg, rgb(0, 117, 224) 9.82214%, rgb(112, 64, 185) 38.0971%, rgb(158, 0, 233) 72.8491%, rgb(158, 0, 233) 100%)")}>New feature</h2>
          <h1 className="text-3xl md:text-[56px] font-semibold leading-[1.2em] tracking-[-0.8px] text-black">Storefront</h1>
          <p>ระบบเว็บไซต์ ขายสินค้าและสร้างร้านค้าออนไลน์ </p>
        </div>
      </section>

      <section className="p-10 bg-[#FCFBFE] flex flex-col gap-10">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl md:text-[56px] font-semibold leading-[1.2em] tracking-[-0.8px] text-black" style={textGradient("linear-gradient(100deg, rgb(0, 183, 224) 0%, rgb(64, 0, 255) 100%)")}>Teamchat</h1>
          <p>ระบบรวมแชทจากทุกช่องทางในที่เดียว</p>
        </div>
      </section>
    </section>
  )
}

export default Products