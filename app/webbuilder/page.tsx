import ImgPlaceholder from "@/components/ImgPlaceholder"
import ViewMoreSheet from "@/components/main/ViewMoreSheet"
import { Button } from "@/components/ui/button"
import HeroVideoDialog from "@/components/ui/hero-video-dialog"
import { Check, X } from "lucide-react"

const Webbuilder = () => {
  return (
    <section className="flex flex-col gap-10 py-20">
      <section className="flex flex-col items-center gap-10 main-container">
        <h2 className="text-xl font-semibold text-center">ง่ายกว่า Wix, SquareSpace, MakeWebEasy และ lnwShop<br/> ก็เรานี้แหละ ใช้ฟรีอีกด้วยนะ!</h2>

        <ImgPlaceholder height="900px">
          WEB BUILDER
        </ImgPlaceholder>

        <p className="text-shadegray font-semibold">ไม่ต้องเขียนโค้ด มีแค่ Tablet หรือ iPad ก็เปิดเว็บได้เลย</p>
        <Button>เปิดเว็บไซต์ฟรี</Button>
      </section>

      <section className="flex flex-col gap-10 small-container py-[198px] main-container">
        <h1 className="font-semibold sub-header text-center">สร้างเว็บไซต์สุดปังและฟรี<br/> คุณเองก็ทำได้</h1>

        <ImgPlaceholder height="418px">
          <p className="text-center">ONE VIDEO Placeholder</p>
        </ImgPlaceholder>

        <h2 className="font-medium text-2xl text-left text-shadegray-200 p-12">สร้างเว็บไซต์สำเร็จรูปของคุณด้วยเครื่องมือที่ใช้ง่าย ไม่ต้องเขียนโค้ด ตกแต่งและแชร์เว็บดีๆของคุณได้อย่างอิสระ</h2>

        <div className="flex gap-5">
          <ImgPlaceholder height="600px">
            <p className="text-center">ONE VIDEO Placeholder</p>
          </ImgPlaceholder>
          <ImgPlaceholder height="600px">
            <p className="text-center">ONE VIDEO Placeholder</p>
          </ImgPlaceholder>
        </div>

        <div className="font-medium text-2xl text-left text-shadegray-200 grid md:grid-cols-2 gap-4">
          <h2 className="p-12">ไม่ว่าใครก็สามารถสร้างสรรค์เว็บไซต์ที่เป็นมากกว่าเว็บไซต์ได้! จัดการปรับแต่งหน้าเว็บตามที่คุณต้องการได้ง่าย ๆ</h2>
          <h2 className="p-12">รองรับทั้งคอมพิวเตอร์ และแท็บเล็ต ไม่ต้องลงโปรแกรม เปิดผ่านเบราว์เซอร์ ใช้งานสะดวกไม่ว่าจะทำที่ไหนก็ตามใจคุณ</h2>
        </div>

        <h1 className="font-semibold sub-header">ทำเว็บไซต์ที่ทรงพลัง ใช้งานง่ายเพียงปลายนิ้วสัมผัส</h1>
        <HeroVideoDialog videoSrc="https://youtu.be/BpUxrR34t58"/>

        <h2 className="font-medium text-2xl text-left text-shadegray-200 p-12">สัมผัสประสบการณ์ความเป็นไปได้แบบไร้ขอบเขตด้วยเทมเพลตมืออาชีพให้การนำเสนอเว็บไซต์ของคุณเป็นไปได้อย่าง่ายดาย</h2>
      
        <div className="flex gap-5">
          <ImgPlaceholder height="600px">
            <p className="text-center">ONE VIDEO Placeholder</p>
          </ImgPlaceholder>
          <ImgPlaceholder height="600px">
            <p className="text-center">ONE VIDEO Placeholder</p>
          </ImgPlaceholder>
        </div>

        <div className="font-medium text-2xl text-left text-shadegray-200 grid md:grid-cols-2 gap-4">
          <h2 className="p-12">เริ่มต้นไม่ถูก? ไม่ต้องกังวล เพราะมีเอไอที่จะคอยช่วยคุณ ออกแบบหน้าต่าง ๆ ของเว็บไซต์คุณให้อีกด้วย</h2>
          <h2 className="p-12">ปรับแต่งและเริ่มต้นด้วยเทมเพลตและวิตเจ็ตมากมาย เพียงใช้นิ้วจิ้มก็เสร็จเลย</h2>
        </div>

        <ViewMoreSheet buttonText="More on Templates" title="templates.">
          Hello
        </ViewMoreSheet>
      </section>

      <section className="flex flex-col gap-10 small-container">
        <h2 className="sub-header font-semibold">AI ที่ดี คือ AI ที่ช่วยงานได้จริง</h2>

        <ImgPlaceholder height="600px">
          <p className="text-center">AI CREATOR Placeholder</p>
        </ImgPlaceholder>

        <p className="text-shadegray font-semibold">ไม่ต้องเสียเวลาอีกต่อไป มี AI ช่วยคุณคิดช่วยออกแบบช่วยจัดการเว็บไซต์</p>

        <ImgPlaceholder height="600px">
          <p className="text-center">AI CREATOR Placeholder</p>
        </ImgPlaceholder>

        <h2 className="sub-header font-semibold">ทำเว็บไซต์ แบบมืออาชีพ รองรับทุกขนาดหน้าจอ</h2>

        <ImgPlaceholder height="600px">
          <p className="text-center">AI CREATOR Placeholder</p>
        </ImgPlaceholder>
        <div className="flex gap-5">
          <ImgPlaceholder height="600px">
            <p className="text-center">ONE VIDEO Placeholder</p>
          </ImgPlaceholder>
          <ImgPlaceholder height="600px">
            <p className="text-center">ONE VIDEO Placeholder</p>
          </ImgPlaceholder>
        </div>

        <div className="font-medium text-2xl text-left text-shadegray-200 grid md:grid-cols-2 gap-4">
          <h2 className="p-12">แอนิเมชั่นสุดเท่ไม่ใช่ปัญหาด้วยระบบ timeline ในการสร้างและตั้งค่าอนิเมชั่นต่าง ๆ ในเว็บไซต์ของคุณ</h2>
          <h2 className="p-12">สร้างสรรค์ สีสัน รูปแบบได้ไม่จำกัด โดยไม่ต้องเสียเงินมากมาย เพื่อให้คุณปลดปล่อยความเป็นตัวคุณได้อย่างเต็มที</h2>
        </div>
      </section>

      <section>
        <ImgPlaceholder height="1000px">AI CREATOR PLACEHOLDER</ImgPlaceholder>
      </section>

      <section className="bg-black py-20">
        <div className="main-container flex flex-col gap-6">
          <h2 className="sub-header !text-white font-semibold">มีโหมด freeform, freehand หรือ no code ที่เจ้าอื่นเรียก</h2>
          <p className="text-2xl text-shadegray-200 font-semibold">เจ้าอื่นบอกว่าใช้งานง่าย? พอใช้ไปกลับไม่จริง? ของซาเวียโก ถูกสร้างมาจากทีมงานไทยที่ได้รับ Inspiration จาก Canva และการผสมผสานกันกับ SquareSpace  ทำให้ระบบของเรานั้นถูกสร้างมาเพื่อให้ใช้งานง่าย เพื่อทุกยูสเซอร์ที่ใช้ iPad หรือ โน็ตบุ๊กก็เริ่มต้นใช้งานได้อย่างง่ายดาย และยังมีเอไอจาก OpenAI ที่คอยช่วยเหลืออีกด้วย</p>
          <ImgPlaceholder height="800px">PLATFORM PLACEHOLDER</ImgPlaceholder>
        </div>

        <div className="font-medium text-2xl text-left text-shadegray-200 grid md:grid-cols-2 gap-4 main-container">
          <h2 className="p-12">ให้เราเป็นแรงบันดาลใจ<br/>ในการปรับแต่งเว็บไซต์ของคุณ</h2>
        </div>

        <div className="flex gap-5 main-container">
          <ImgPlaceholder height="600px">
            <p className="text-center">ONE VIDEO Placeholder</p>
          </ImgPlaceholder>
          <ImgPlaceholder height="600px">
            <p className="text-center">ONE VIDEO Placeholder</p>
          </ImgPlaceholder>
        </div>

        <div className="font-medium text-2xl text-left text-white grid md:grid-cols-2 gap-4 main-container">
          <h2 className="p-12">ออกแบบเสร็จก็เปิดเว็บไซต์ได้เลย เพียงใส่ชื่อลิงก์และเว็บไซต์ที่คุณต้องการแค่นี้ เว็บไซต์ของคุณก็ออนไลน์ให้คนทั้งโลกเข้าถึงได้</h2>
          <h2 className="p-12">เปลี่ยนโดเมน หรือ .com ตัวเองได้ทันที หากคุณมีชื่อหรือมีโดเมนของคุณอยู่แล้ว</h2>
        </div>

        <div className="main-container flex flex-col gap-10">
          <h2 className="sub-header !text-white font-semibold">รองรับ การสร้างเว็บไซต์ผ่าน<br/> Apple Pencil</h2>
          <ImgPlaceholder height="600px">
            <p className="text-center">ONE VIDEO Placeholder</p>
          </ImgPlaceholder>
        </div>
      </section>

      <section className="flex flex-col gap-10 main-container">
        <div className="flex flex-col gap-1">
          <h1 className="flex items-center text-4xl gap-2 font-semibold">เขียนโค้ดเปิดเว็บ? <X className="text-red-500 w-12 h-12"/></h1>
          <h1 className="flex items-center text-4xl gap-2 font-semibold">วาดเพื่อสร้างเว็บ? <Check className="text-green-500 w-12 h-12"/></h1>
          <p className="text-xl font-semibold text-shadegray-200">ปรับใช้ระบบเหมือนกันกับ Procreate</p>
        </div>

        <ImgPlaceholder height="600px">
          <p className="text-center">Procreate Placeholder</p>
        </ImgPlaceholder>
      </section>
    </section>
  )
}

export default Webbuilder