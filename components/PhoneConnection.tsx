import Image from "next/image"
import ImgPlaceholder from "./ImgPlaceholder"
import phoneFrame from "@/public/phone-frame.png"

const PhoneConnection = () => {
  return (
    <section className="small-container pb-20">
    <div className="flex flex-col gap-[200px] text-3xl font-semibold">
      <h1>เปิดระบบผ่านไลน์ของธุรกิจคุณได้ โดยไม่ต้องมีแอปเพิ่ม</h1>
      <h1>สมัครง่ายด้วยระบบที่เชื่อมต่อไลน์ไอดีและเบอร์ลูกค้า</h1>
      <h1>มีหน้าระบบสมาชิกและการแลกของรางวัลเหมือน ซูปเปอร์แอปต่างๆในตลาด</h1>
      <h1>กำหนดและตั้งค่า ระดับสมาชิก เพื่อจัดการสิทธิพิเศษได้</h1>
      <h1>เช็คคะแนนเรียลไทม์ แสกนและรับของรางวัล หน้าร้านค้าได้เลย</h1>

      <Image src={phoneFrame} alt="phoneframe" className="rotate-90 scale-[0.67] sticky -bottom-20 mx-auto"/>
    </div>
  </section>
  )
}

export default PhoneConnection