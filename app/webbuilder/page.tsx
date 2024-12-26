import ImgPlaceholder from "@/components/ImgPlaceholder"
import ViewMoreSheet from "@/components/main/ViewMoreSheet"
import { Button } from "@/components/ui/button"
import HeroVideoDialog from "@/components/ui/hero-video-dialog"

const Webbuilder = () => {
  return (
    <section className="flex flex-col gap-10 main-container py-20">
      <section className="flex flex-col items-center gap-10">
        <h2 className="text-xl font-semibold text-center">ง่ายกว่า Wix, SquareSpace, MakeWebEasy และ lnwShop<br/> ก็เรานี้แหละ ใช้ฟรีอีกด้วยนะ!</h2>

        <ImgPlaceholder height="900px">
          WEB BUILDER
        </ImgPlaceholder>

        <p className="text-shadegray font-semibold">ไม่ต้องเขียนโค้ด มีแค่ Tablet หรือ iPad ก็เปิดเว็บได้เลย</p>
        <Button>เปิดเว็บไซต์ฟรี</Button>
      </section>

      <section className="flex flex-col gap-10 small-container py-[198px]">
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

      <section>
        <h2 className="sub-header font-semibold">AI ที่ดี คือ AI ที่ช่วยงานได้จริง</h2>
      </section>
    </section>
  )
}

export default Webbuilder