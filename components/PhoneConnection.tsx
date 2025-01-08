"use client"

import Image from "next/image"
import phoneFrame from "@/public/phone-frame.png"
import PointsRewards from "./ecommerce/points-rewards"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const PhoneConnection = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"]
  });

  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  const MainText = ({ children } : { children: React.ReactNode }) => {
    return (
      <motion.div ref={scrollRef} className="h-[600px]">
        <motion.h1 style={{ rotateY: rotateY }}>{children}</motion.h1>
      </motion.div>
    )
  }

  return (
    <section className="small-container pb-[120px]">
      <div className="text-3xl font-semibold flex flex-col">
        <MainText>เปิดระบบผ่านไลน์ของธุรกิจคุณได้ โดยไม่ต้องมีแอปเพิ่ม</MainText>
        <MainText>สมัครง่ายด้วยระบบที่เชื่อมต่อไลน์ไอดีและเบอร์ลูกค้า</MainText>
        <MainText>มีหน้าระบบสมาชิกและการแลกของรางวัลเหมือน ซูปเปอร์แอปต่างๆในตลาด</MainText>
        <MainText>กำหนดและตั้งค่า ระดับสมาชิก เพื่อจัดการสิทธิพิเศษได้</MainText>
        <MainText>เช็คคะแนนเรียลไทม์ สแกนและรับของรางวัล หน้าร้านค้าได้เลย</MainText>

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