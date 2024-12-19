import MainDashboard from "@/components/dashboard/main-dashboard";
import ViewMoreSheet from "@/components/main/ViewMoreSheet";
import { Bento } from "@/components/main/Bento";
import { orderManagementSystems, storefrontSystems, trustedBrands, siteBuilderSystems, lineOASystems, ImgList } from "./data";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import { textGradient } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col gap-10">
      <section className="flex flex-col gap-10 text-center px-10">
        {/* TODO: paste image of swappers */}
        <h1>IMAGE WILL BE PASTED SOON!</h1>
        <h1 className="text-[#1D1E20] text-[42px] md:text-[78px] font-semibold leading-[1.2em] tracking-[-0.8px]">
          จัดการงานและธุรกิจ<br/>
          <span className="text-mainpurple">ทั้งหมด</span>
          ของคุณ
        </h1>
        <p className="text-shadegray font-semibold">แพลตฟอร์ม WorkSuite ตั้งแต่จัดการธุรกิจ จัดการโปรเจ็ค, สร้างเว็บไซต์, ขายสินค้า , <br/>จัดการคำสั่งซื้อ ระบบ CRM และ Point & Reward จนถึง ระบบรวมแชท</p>

        <Link href="https://dashboard.zaviago.com/">เริ่มใช้ฟรี</Link>

        <aside className="overflow-hidden relative shadow-main rounded-lg">
          <MainDashboard />
        </aside>
      </section>

      <section className="max-w-[900px] mx-auto w-full flex flex-col gap-20 px-10">
        <div className="flex gap-12 items-center w-full">
          <p className="text-xs text-shadegray-200 font-medium">Trusted by industry leaders and innovators</p>
          <ul className="flex justify-between items-center w-full">
            <ImgList list={trustedBrands}/>
          </ul>
        </div>
        {/* Translation: Integrate with business management system, orders, stocks, customers for every platform */}
        <h1 className="text-3xl md:text-[56px] font-semibold leading-[1.2em] tracking-[-0.8px] text-shadegray-300">ระบบ <span className="text-mainpurple">จัดการธุรกิจ</span> ออเดอร์,<br/> สต็อก, ลูกค้า , เชื่อมต่อได้ทุก<br/>แพลตฟอร์ม</h1>
        <div className="flex flex-col gap-5 w-full">
          <p className="text-xs text-shadegray-200 font-medium">ใช้แทนระบบอื่นเช่น</p>
          <ul className="flex items-center gap-8 w-full">
            <ImgList list={orderManagementSystems}/>
          </ul>
        </div>
      </section>

      <section className="max-w-[900px] mx-auto w-full flex flex-col gap-10 p-10">
        <Bento />
        <div className="font-medium text-2xl text-shadegray-200 grid md:grid-cols-2 gap-4">
          <h2 className="p-12">รวมทุกฟีเจอร์ การจัดการธุรกิจ ออนไลน์และออฟไลน์ <span className="text-mainpurple">จัดการคำสั่งซื้ออย่างเป็นระบบ</span> สุดปังกับฟีเจอร์ที่ครอบคลุมทุกรูปแบบ</h2>
          <h2 className="p-12">ไม่ว่าคุณจะมีกี่ช่องทางการขายก็จัดการได้ <span className="text-mainpurple">ช่วยลดเวลาในการทำงาน และเพิ่มโอกาส</span>ในการสร้างกำไร</h2>
        </div>
        <ViewMoreSheet buttonText="More on WorkSpace" title="workspace." desc="ระบบจัดการงานธุรกิจทั้งหมดของคุณในที่เดียว">
          <div className="font-medium text-2xl text-shadegray-200 grid md:grid-cols-2 gap-4">
            <h2 className="p-12">รวมทุกฟีเจอร์ การจัดการธุรกิจ ออนไลน์และออฟไลน์ <span className="text-mainpurple">จัดการคำสั่งซื้ออย่างเป็นระบบ</span> สุดปังกับฟีเจอร์ที่ครอบคลุมทุกรูปแบบ</h2>
            <h2 className="p-12">ไม่ว่าคุณจะมีกี่ช่องทางการขายก็จัดการได้ <span className="text-mainpurple">ช่วยลดเวลาในการทำงาน และเพิ่มโอกาส</span>ในการสร้างกำไร</h2>
          </div>
        </ViewMoreSheet>
      </section>

      <section className="flex flex-col py-[175px] bg-[#fafafa] text-center px-10 gap-10">
        <div className="max-w-[900px] mx-auto w-full">
          <h1 className="font-semibold text-3xl md:text-[56px] leading-[1.2em] tracking-[-0.8px] text-shadegray-300"><span className="text-mainpurple">ระบบเว็บไซต์</span> ขายสินค้า<br/> และสร้าง <span className="text-mainpurple">ร้านค้าออนไลน์</span><br/>ใหม่ของคุณ</h1>
        </div>

        <div className="flex flex-col gap-2 w-full items-center">
          <p className="text-xs text-shadegray-200 font-medium">ใช้แทนระบบอื่นเช่น</p>
          <ul className="flex items-center justify-center gap-8 w-full">
            <ImgList list={storefrontSystems}/>
          </ul>
        </div>

        {/* TODO: paste image or template of Storefront */}
        <h1>STOREFRONT IMAGE OR TEMPLATE WILL BE PASTED SOON!</h1>

        <div className="max-w-[900px] mx-auto w-full font-medium text-2xl text-left text-shadegray-200 grid md:grid-cols-2 gap-4 pt-20">
          <h2 className="p-12">ให้คุณมั่นใจได้ตั้งแต่เริ่มสร้างเว็บจนถึงยอดขายร้อยล้าน <span className="text-mainpurple">ด้วยเครื่องมือสร้างเว็บไซต์ที่ทรงพลัง</span> สุดปังกับฟีเจอร์และการทำการตลาด</h2>
          <h2 className="p-12">ลูกค้าของคุณเข้าถึงเว็บไซต์ได้มากขึ้น <span className="text-mainpurple">รองรับทุกรูปแบบไม่ว่าจะเป็น คอมพิวเตอร์ หรือ บนมือถือ</span> เพื่อมุ่งสู่ยอดขายที่คุณต้องการ</h2>
        </div>

        <ViewMoreSheet buttonText="More on Storefront" title="Store-front.">
          Hello
        </ViewMoreSheet>
      </section>

      <section className="flex flex-col gap-10 max-w-[900px] mx-auto w-full px-10 py-[198px]">
        <h1 className="font-semibold text-3xl md:text-[56px] leading-[1.2em] tracking-[-0.8px] text-shadegray-300 text-center">สร้างเว็บไซต์สุดปังและฟรี<br/> คุณเองก็ทำได้</h1>

        <div className="flex flex-col gap-5 w-full items-center">
          <p className="text-xs text-shadegray-200 font-medium">ใช้แทนระบบอื่นเช่น</p>
          <ul className="flex items-center justify-center gap-8 w-full">
            <ImgList list={siteBuilderSystems}/>
          </ul>
        </div>

        <p className="text-center">ONE VIDEO Placeholder</p>

        <h2 className="font-medium text-2xl text-left text-shadegray-200 p-12">สร้างเว็บไซต์สำเร็จรูปของคุณด้วยเครื่องมือที่ใช้ง่าย ไม่ต้องเขียนโค้ด ตกแต่งและแชร์เว็บดีๆของคุณได้อย่างอิสระ</h2>

        <p className="text-center">TWO VIDEOS Placeholder</p>

        <div className="font-medium text-2xl text-left text-shadegray-200 grid md:grid-cols-2 gap-4 pt-20">
          <h2 className="p-12">ไม่ว่าใครก็สามารถสร้างสรรค์เว็บไซต์ที่เป็นมากกว่าเว็บไซต์ได้! จัดการปรับแต่งหน้าเว็บตามที่คุณต้องการได้ง่าย ๆ</h2>
          <h2 className="p-12">รองรับทั้งคอมพิวเตอร์ และแท็บเล็ต ไม่ต้องลงโปรแกรม เปิดผ่านเบราว์เซอร์ ใช้งานสะดวกไม่ว่าจะทำที่ไหนก็ตามใจคุณ</h2>
        </div>

        <h1 className="font-semibold text-3xl md:text-[56px] leading-[1.2em] tracking-[-0.8px] text-shadegray-300">ทำเว็บไซต์ที่ทรงพลัง ใช้งานง่ายเพียงปลายนิ้วสัมผัส</h1>
        <HeroVideoDialog videoSrc="https://youtu.be/BpUxrR34t58"/>

        <h2 className="font-medium text-2xl text-left text-shadegray-200 p-12">สัมผัสประสบการณ์ความเป็นไปได้แบบไร้ขอบเขตด้วยเทมเพลตมืออาชีพให้การนำเสนอเว็บไซต์ของคุณเป็นไปได้อย่าง่ายดาย</h2>
      
        <ViewMoreSheet buttonText="More on Templates" title="templates.">
          Hello
        </ViewMoreSheet>
      </section>

      <section className="flex flex-col gap-10 max-w-[900px] mx-auto w-full px-10 py-20">
        <h1 className="font-semibold text-3xl md:text-[56px] leading-[1.2em] tracking-[-0.8px] text-shadegray-300">เก็บข้อมูลสมาชิก <span className="text-mainpurple">ระบบสะสมแต้ม</span> และแลก <span className="text-mainpurple">ของรางวัล</span> ผ่าน Line OA</h1>
      
        <div className="flex flex-col gap-5 w-full">
          <p className="text-xs text-shadegray-200 font-medium">ใช้แทนระบบอื่นเช่น</p>
          <ul className="flex items-center gap-8 w-full">
            <ImgList list={lineOASystems} />
          </ul>
        </div>

        <p className="text-center">Phone Points and Rewards Placeholder</p>

        <div className="font-medium text-2xl text-left text-shadegray-200 grid md:grid-cols-2 gap-4 pt-20">
          <h2 className="p-12">ดึงดูดลูกค้าของคุณเข้าสู่ระบบ<span className="text-mainpurple">สะสมแต้ม สร้างของรางวัล เพิ่มคูปอง มอบสิทธิพิเศษ</span> กระตุ้นการขายอย่างต่อเนื่อง</h2>
          <h2 className="p-12">เข้าถึงได้ง่ายผ่าน<span className="text-mainpurple">แพลตฟอร์มออนไลน์</span> ที่คุณสามารถสร้างสรรค์ จัดการ ปรับแต่ง ตรงตามใจคุณ</h2>
        </div>

        <ViewMoreSheet buttonText="More on Points and Rewards" title="Points & Rewards">
          Hello
        </ViewMoreSheet>
      </section>

      <section className="max-w-[900px] mx-auto w-full px-10">
        <h1>เปิดระบบผ่านไลน์ของธุรกิจคุณได้ โดยไม่ต้องมีแอปเพิ่ม</h1> {/* LINE Features */}
        <h1>สมัครง่ายด้วยระบบที่เชื่อมต่อไลน์ไอดีและเบอร์ลูกค้า</h1> {/* Register with LINE via phone number and/or Line ID */}
        <h1>มีหน้าระบบสมาชิกและการแลกของรางวัลเหมือน ซูปเปอร์แอปต่างๆในตลาด</h1>
        <h1>กำหนดและตั้งค่า ระดับสมาชิก เพื่อจัดการสิทธิพิเศษได้</h1>
        <h1>เช็คคะแนนเรียลไทม์ แสกนและรับของรางวัล หน้าร้านค้าได้เลย</h1>
      </section>

      <section className="flex flex-col items-center py-[175px] bg-[#fafafa] px-10 gap-10">
        <div className="max-w-[900px] mx-auto w-full flex flex-col items-center">
          <h1 className="font-semibold text-3xl md:text-[56px] leading-[1.2em] tracking-[-0.8px] text-shadegray-300">มีระบบ <span className="text-mainpurple">รวมแชทในที่เดียว</span><br/> ดูแลลูกค้าพร้อมกันได้หลายแพลตฟอร์ม</h1>
        
          <h1 className="max-w-[490px] font-semibold text-3xl md:text-[56px] leading-[1.2em] tracking-[-0.8px] text-shadegray-300">เพิ่มประสิทธิภาพทีม<br/>แอดมินในการดูแล</h1>

          <div className="max-w-[490px] flex flex-col gap-5 pt-20">
            <h1 className="font-semibold text-3xl md:text-[56px] leading-[1.2em] tracking-[-0.8px] text-shadegray-300">ตอบโจทย์การดูแล<br/>แชทครบวงจร</h1>
            <h2 className="font-medium text-2xl text-left text-shadegray-200">รองรับการแชทหลากหลายช่องทาง ทั้ง <span className="text-mainpurple">FB Messenger, Instagram, LINE Official, Telegram</span> และอื่นๆ ตอบสะดวก บริหารจัดการได้สบายในแอปเดียว</h2>
          </div>
        </div>

        <ViewMoreSheet buttonText="More on Team Chat" title="Points & Rewards">
          Hello
        </ViewMoreSheet>
      </section>

      {/* TODO: Insert the background */}
      <section className="flex flex-col items-center py-20 px-10 gap-5 text-center">
        <div style={textGradient("linear-gradient(121deg, rgb(0, 117, 224) 9.82214%, rgb(112, 64, 185) 38.0971%, rgb(158, 0, 233) 72.8491%, rgb(158, 0, 233) 100%)")}>
          <h2 className="font-medium text-xl">Proudly recommended</h2> {/* ขอแนะนำ */}
          <h1 className="font-recoleta text-[90px] font-bold leading-[110px]">workday.</h1>
        </div>
        <p>ระบบจัดการงานและโปรเจ็คการทำงาน</p> {/* Project management system */}
      </section>

      <section className="flex flex-col items-center py-20 px-10 text-center">
        <h1 className="font-recoleta text-[60px] font-bold">Data Insight</h1>
        <p>โปรแกรมสร้าง Data Visualization จากธุรกิจของคุณ</p> {/* Data visualization program from your business */}
      </section>

      <section className="flex flex-col items-center py-20 px-10 text-center">
        <h1 className="font-recoleta text-[60px] font-bold">Sales Hub</h1>
        <p>ซอฟต์แวร์บริหารงานขายที่ครบถ้วน</p> {/* Full sales management platform */}
      </section>

      <section className="grid md:grid-cols-2">
        <section className="flex flex-col items-center py-20 px-10 text-center">
          <h1 className="font-recoleta text-[60px] font-bold">in.store</h1>
          <p>ซอฟต์แวร์บริหารงานขายที่ครบถ้วน</p>
        </section>
        <section className="flex flex-col items-center py-20 px-10 text-center">
          <h1 className="font-recoleta text-[60px] font-bold">in.front</h1>
          <p>อุปกรณ์ POS Hardware</p>
        </section>
      </section>
    </section>
  );
}
