import Image from "next/image"
import phoneFrame from "@/public/phone-frame.png"
import PointsRewards from "./ecommerce/points-rewards"

const PhoneConnection = () => {
  return (
    <section className="small-container pb-[120px]">
    <div className="flex flex-col gap-[600px] text-3xl font-semibold">
      <h1>เปิดระบบผ่านไลน์ของธุรกิจคุณได้ โดยไม่ต้องมีแอปเพิ่ม</h1>
      <h1>สมัครง่ายด้วยระบบที่เชื่อมต่อไลน์ไอดีและเบอร์ลูกค้า</h1>
      <h1>มีหน้าระบบสมาชิกและการแลกของรางวัลเหมือน ซูปเปอร์แอปต่างๆในตลาด</h1>
      <h1>กำหนดและตั้งค่า ระดับสมาชิก เพื่อจัดการสิทธิพิเศษได้</h1>
      <h1>เช็คคะแนนเรียลไทม์ สแกนและรับของรางวัล หน้าร้านค้าได้เลย</h1>

      <div className="sticky -bottom-20 flex flex-col items-center justify-center">
        <Image src={phoneFrame} alt="phoneframe" className="rotate-90 scale-[0.75] relative z-[11]"/>
        <div className="absolute scale-[0.48] bg-white h-[1225px] rounded-3xl pt-20">
          <PointsRewards />
        </div>
      </div>
    </div>
  </section>
  )
}

export default PhoneConnection