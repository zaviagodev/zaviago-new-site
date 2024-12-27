import MainDashboard from "@/components/dashboard/main-dashboard";
import ViewMoreSheet from "@/components/main/ViewMoreSheet";
import { Bento } from "@/components/main/Bento";
import { orderManagementSystems, storefrontSystems, trustedBrands, siteBuilderSystems, lineOASystems, ImgList, workdaySystems, salesHubSystems, dataInsightSystems, inStoreSystems } from "./data";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import { textGradient } from "@/lib/utils";
import Link from "next/link";
import ImgPlaceholder from "@/components/ImgPlaceholder";
import PhoneConnection from "@/components/PhoneConnection";
import ProductCard from "@/components/ecommerce/product-card";
import headphoneImg from "@/public/mock-products/headphone.png"
import bagImg from "@/public/mock-products/bag.png"
import ImgCarousel from "@/components/ImgCarousel";

export default function Home() {
  return (
    <section className="flex flex-col gap-10 pt-20">
      <section className="flex flex-col gap-10 text-center px-10">
        <div className="max-w-[300px] mx-auto w-full">
          <ImgCarousel />
        </div>
        <h1 className="main-header">
          จัดการงานและธุรกิจ<br/>
          <span className="text-mainpurple">ทั้งหมด</span>
          ของคุณ
        </h1>
        <p className="text-shadegray font-semibold">แพลตฟอร์ม WorkSuite ตั้งแต่จัดการธุรกิจ จัดการโปรเจ็ค, สร้างเว็บไซต์, ขายสินค้า , <br/>จัดการคำสั่งซื้อ ระบบ CRM และ Point & Reward จนถึง ระบบรวมแชท</p>

        <Link href="https://dashboard.zaviago.com" className="purple-button">เริ่มใช้ฟรี</Link>

        <aside className="overflow-hidden relative shadow-main rounded-lg">
          <MainDashboard />
        </aside>
      </section>

      <section className="small-container flex flex-col gap-20">
        <div className="flex gap-12 items-center w-full">
          <p className="text-xs text-shadegray-200 font-medium">Trusted by industrial leaders and innovators</p>
          <ul className="flex justify-between items-center w-full">
            <ImgList list={trustedBrands}/>
          </ul>
        </div>
        {/* Translation: Integrate with business management system, orders, stocks, customers for every platform */}
        <h1 className="text-3xl md:text-[56px] font-semibold leading-[1.2em] tracking-[-0.8px] text-shadegray-300">ระบบ <span className="text-mainpurple">จัดการธุรกิจ</span> ออเดอร์,<br/> สต็อก, ลูกค้า , เชื่อมต่อได้ทุก<br/>แพลตฟอร์ม</h1>
        <div className="flex flex-col gap-5 w-full">
          <p className="text-xs text-shadegray-200 font-medium">ใช้แทนระบบอื่นเช่น</p>
          <ul className="flex items-center gap-8 w-full flex-wrap">
            <ImgList list={orderManagementSystems}/>
          </ul>
        </div>
      </section>

      <section className="small-container flex flex-col gap-10 p-10">
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

      <section className="flex flex-col py-[175px] bg-shadegray-500 text-center px-10 gap-10">
        <div className="small-container">
          <h1 className="font-semibold sub-header"><span className="text-mainpurple">ระบบเว็บไซต์</span> ขายสินค้า<br/> และสร้าง <span className="text-mainpurple">ร้านค้าออนไลน์</span><br/>ใหม่ของคุณ</h1>
        </div>

        <div className="flex flex-col gap-2 w-full items-center">
          <p className="text-xs text-shadegray-200 font-medium">ใช้แทนระบบอื่นเช่น</p>
          <ul className="flex items-center justify-center gap-8 w-full flex-wrap">
            <ImgList list={storefrontSystems}/>
          </ul>
        </div>

        {/* TODO: paste image or template of Storefront */}
        <ImgPlaceholder height="640px" width="1080px" className="mx-auto">
          <h1>STOREFRONT IMAGE OR TEMPLATE WILL BE PASTED SOON!</h1>
        </ImgPlaceholder>

        <div className="small-container font-medium text-2xl text-left text-shadegray-200 grid md:grid-cols-2 gap-4 pt-20">
          <h2 className="p-12">ให้คุณมั่นใจได้ตั้งแต่เริ่มสร้างเว็บจนถึงยอดขายร้อยล้าน <span className="text-mainpurple">ด้วยเครื่องมือสร้างเว็บไซต์ที่ทรงพลัง</span> สุดปังกับฟีเจอร์และการทำการตลาด</h2>
          <h2 className="p-12">ลูกค้าของคุณเข้าถึงเว็บไซต์ได้มากขึ้น <span className="text-mainpurple">รองรับทุกรูปแบบไม่ว่าจะเป็น คอมพิวเตอร์ หรือ บนมือถือ</span> เพื่อมุ่งสู่ยอดขายที่คุณต้องการ</h2>
        </div>

        <div className="flex items-center main-container">
          <ProductCard imgSrc={headphoneImg} title="Headphone" category="Pomelo" cardClassName="-mr-8 relative z-2 scale-[0.9]"/>
          <ProductCard imgSrc={bagImg} title="Bag" category="Adidas" cardClassName="-mr-8 relative z-3 scale-[0.95]"/>
          <ProductCard imgSrc={headphoneImg} title="Headphone" category="Nike" cardClassName="m-0 relative z-4"/>
          <ProductCard imgSrc={headphoneImg} title="Headphone" category="Nanyang" cardClassName="-ml-8 relative z-3 scale-[0.95]"/>
          <ProductCard imgSrc={headphoneImg} title="Headphone" category="Edifier" cardClassName="-ml-8 relative z-2 scale-[0.9]"/>
        </div>

        <ViewMoreSheet buttonText="More on Storefront" title="Store-front.">
          Hello
        </ViewMoreSheet>
      </section>

      <section className="flex flex-col gap-10 small-container py-[198px]">
        <h1 className="font-semibold sub-header text-center">สร้างเว็บไซต์สุดปังและฟรี<br/> คุณเองก็ทำได้</h1>

        <div className="flex flex-col gap-5 w-full items-center">
          <p className="text-xs text-shadegray-200 font-medium">ใช้แทนระบบอื่นเช่น</p>
          <ul className="flex items-center justify-center gap-8 w-full flex-wrap">
            <ImgList list={siteBuilderSystems}/>
          </ul>
        </div>

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

        <div className="font-medium text-2xl text-left text-shadegray-200 grid md:grid-cols-2 gap-4 pt-20">
          <h2 className="p-12">ไม่ว่าใครก็สามารถสร้างสรรค์เว็บไซต์ที่เป็นมากกว่าเว็บไซต์ได้! จัดการปรับแต่งหน้าเว็บตามที่คุณต้องการได้ง่าย ๆ</h2>
          <h2 className="p-12">รองรับทั้งคอมพิวเตอร์ และแท็บเล็ต ไม่ต้องลงโปรแกรม เปิดผ่านเบราว์เซอร์ ใช้งานสะดวกไม่ว่าจะทำที่ไหนก็ตามใจคุณ</h2>
        </div>

        <h1 className="font-semibold sub-header">ทำเว็บไซต์ที่ทรงพลัง ใช้งานง่ายเพียงปลายนิ้วสัมผัส</h1>
        <HeroVideoDialog videoSrc="https://youtu.be/BpUxrR34t58"/>

        <h2 className="font-medium text-2xl text-left text-shadegray-200 p-12">สัมผัสประสบการณ์ความเป็นไปได้แบบไร้ขอบเขตด้วยเทมเพลตมืออาชีพให้การนำเสนอเว็บไซต์ของคุณเป็นไปได้อย่าง่ายดาย</h2>
      
        <ViewMoreSheet buttonText="More on Templates" title="templates.">
          Hello
        </ViewMoreSheet>
      </section>

      <section className="flex flex-col gap-10 small-container py-20">
        <h1 className="font-semibold sub-header">เก็บข้อมูลสมาชิก <span className="text-mainpurple">ระบบสะสมแต้ม</span> และแลก <span className="text-mainpurple">ของรางวัล</span> ผ่าน Line OA</h1>
      
        <div className="flex flex-col gap-5 w-full">
          <p className="text-xs text-shadegray-200 font-medium">ใช้แทนระบบอื่นเช่น</p>
          <ul className="flex items-center gap-8 w-full flex-wrap">
            <ImgList list={lineOASystems} />
          </ul>
        </div>

        <ImgPlaceholder height="600px">
          <p className="text-center">Phone Points and Rewards Placeholder</p>
        </ImgPlaceholder>

        <div className="font-medium text-2xl text-left text-shadegray-200 grid md:grid-cols-2 gap-4 pt-20">
          <h2 className="p-12">ดึงดูดลูกค้าของคุณเข้าสู่ระบบ<span className="text-mainpurple">สะสมแต้ม สร้างของรางวัล เพิ่มคูปอง มอบสิทธิพิเศษ</span> กระตุ้นการขายอย่างต่อเนื่อง</h2>
          <h2 className="p-12">เข้าถึงได้ง่ายผ่าน<span className="text-mainpurple">แพลตฟอร์มออนไลน์</span> ที่คุณสามารถสร้างสรรค์ จัดการ ปรับแต่ง ตรงตามใจคุณ</h2>
        </div>

        <ViewMoreSheet buttonText="More on Points and Rewards" title="Points & Rewards">
          <div className="flex flex-col gap-10">
            <ImgPlaceholder height="600px">
              <h1>POINTS AND REWARDS IMAGE</h1>
            </ImgPlaceholder>

            <div className="space-y-4 w-3/4">
              <h1 className="text-4xl font-semibold">ระบบสะสมแต้ม<br/>และแลกของรางวัล</h1>
              <p className="text-shadegray-200 font-medium text-xl">เชื่อมร้านของคุณเข้ากับ <span className="text-shadegray-300">LINE Official Account</span> สร้าง Loyalty Program ไม่จำเป็นต้องโหลดแอปให้ยุ่งยาก และเปิดระบบ Members พร้อม Loyalty Program</p>
            </div>

            <ImgPlaceholder height="600px">
              <h1>POINTS AND REWARDS IMAGE</h1>
            </ImgPlaceholder>

            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <h1 className="text-4xl font-semibold">สมัครสมาชิกเพียง<br/>แค่กรอกเบอร์</h1>
                <p className="text-shadegray-200 font-medium text-xl">เปิดระบบสมัครสมาชิก <span className="text-shadegray-300">เพียงลูกค้าแค่กรอกเบอร์และ OTP</span> ต่อยอดด้วยการแยกกลุ่มสมาชิก สร้าง Level ในการสะสมแต้ม ทำแคมเปญเฉพาะลูกค้าแต่ละกลุ่ม <span className="text-shadegray-300">พร้อมสร้างแคมเปญเพื่อกระตุ้นยอดขายต่างๆในการสะสมแต้มหรือ</span> ทำ Cashback ง่ายๆผ่านไลน์ไอดีของลูกค้า</p>
              </div>
              <ImgPlaceholder height="600px">
                <h1>POINTS AND REWARDS IMAGE</h1>
              </ImgPlaceholder>
            </div>

            <div className="bg-gray-600 -m-20 pb-40 p-20"> {/* TODO: Set background image */}
              <h1 className="sub-header !text-white font-semibold">แลกของรางวัลผ่าน App และรับของจากหน้าร้าน</h1>
            </div>
          </div>
        </ViewMoreSheet>
      </section>

      <PhoneConnection />

      <section className="flex flex-col items-center py-[175px] bg-shadegray-500 px-10 gap-10">
        <div className="small-container flex flex-col items-center gap-10">
          <h1 className="font-semibold sub-header">มีระบบ <span className="text-mainpurple">รวมแชทในที่เดียว</span><br/> ดูแลลูกค้าพร้อมกันได้หลายแพลตฟอร์ม</h1>

          <ImgPlaceholder height="600px" width="1000px">DASHBOARD IMAGE</ImgPlaceholder>

          <h1 className="max-w-[490px] font-semibold sub-header">เพิ่มประสิทธิภาพทีม<br/>แอดมินในการดูแล</h1>

          <div className="max-w-[490px] flex flex-col gap-5 pt-20">
            <h1 className="font-semibold sub-header">ตอบโจทย์การดูแล<br/>แชทครบวงจร</h1>
            <h2 className="font-medium text-2xl text-left text-shadegray-200">รองรับการแชทหลากหลายช่องทาง ทั้ง <span className="text-mainpurple">FB Messenger, Instagram, LINE Official, Telegram</span> และอื่นๆ ตอบสะดวก บริหารจัดการได้สบายในแอปเดียว</h2>
          </div>
        </div>

        <ViewMoreSheet buttonText="More on Team Chat" title="Points & Rewards">
          <ImgPlaceholder height="600px">
            <h1>POINTS AND REWARDS IMAGE</h1>
          </ImgPlaceholder>
        </ViewMoreSheet>
      </section>

      {/* TODO: Insert the background */}
      <section className="flex flex-col items-center py-20 px-10 gap-5 text-center">
        <div style={textGradient("linear-gradient(121deg, rgb(0, 117, 224) 9.82214%, rgb(112, 64, 185) 38.0971%, rgb(158, 0, 233) 72.8491%, rgb(158, 0, 233) 100%)")}>
          <h2 className="font-medium text-xl">Proudly recommended</h2> {/* ขอแนะนำ */}
          <h1 className="font-recoleta text-[90px] font-bold leading-[110px]">workday.</h1>
        </div>
        <p>ระบบจัดการงานและโปรเจ็คการทำงาน</p> {/* Project management system */}

        <div className="flex flex-col gap-5 w-full items-center">
          <p className="text-xs text-shadegray-200 font-medium">ใช้แทนระบบอื่นเช่น</p>
          <ul className="flex items-center gap-8 w-full justify-center flex-wrap">
            <ImgList list={workdaySystems}/>
          </ul>
        </div>
      </section>

      <section className="flex flex-col items-center py-20 px-10 text-center gap-5 text-white bg-black">
        <h1 className="font-recoleta text-[60px] font-bold">Data Insight</h1>
        <p>โปรแกรมสร้าง Data Visualization จากธุรกิจของคุณ</p> {/* Data visualization program from your business */}

        <div className="flex flex-col gap-5 w-full items-center">
          <p className="text-xs text-shadegray-200 font-medium">ใช้แทนระบบอื่นเช่น</p>
          <ul className="flex items-center gap-8 w-full justify-center flex-wrap">
            <ImgList list={dataInsightSystems}/>
          </ul>
        </div>

        <ImgPlaceholder height="400px" width="1000px">DATA INSIGHT IMAGE</ImgPlaceholder>
      </section>

      <section className="flex flex-col items-center py-20 px-10 text-center gap-5">
        <h1 className="font-recoleta text-[60px] font-bold">Sales Hub</h1>
        <p>ซอฟต์แวร์บริหารงานขายที่ครบถ้วน</p> {/* Full sales management platform */}

        <div className="flex flex-col gap-5 w-full items-center">
          <p className="text-xs text-shadegray-200 font-medium">ใช้แทนระบบอื่นเช่น</p>
          <ul className="flex items-center gap-8 w-full justify-center flex-wrap">
            <ImgList list={salesHubSystems}/>
          </ul>
        </div>

        <ImgPlaceholder height="400px" width="1000px">SALES HUB IMAGE</ImgPlaceholder>
      </section>

      <section className="grid md:grid-cols-2">
        <section className="flex flex-col items-center py-20 px-10 text-center gap-5">
          <h1 className="font-recoleta text-[60px] font-bold">in.store</h1>
          <p>ซอฟต์แวร์บริหารงานขายที่ครบถ้วน</p>

          <div className="flex flex-col gap-5 w-full items-center">
            <p className="text-xs text-shadegray-200 font-medium">ใช้แทนระบบอื่นเช่น</p>
            <ul className="flex items-center gap-8 w-full justify-center flex-wrap">
              <ImgList list={inStoreSystems}/>
            </ul>
          </div>
          <ImgPlaceholder height="400px">IN STORE IMAGE</ImgPlaceholder>
        </section>
        <section className="flex flex-col items-center py-20 px-10 text-center gap-5">
          <h1 className="font-recoleta text-[60px] font-bold">in.front</h1>
          <p>อุปกรณ์ POS Hardware</p>
          <ImgPlaceholder height="400px">IN FRONT IMAGE</ImgPlaceholder>
        </section>
      </section>

      <section className="grid md:grid-cols-2">
        <section className="flex flex-col items-center py-20 px-10 text-center gap-5">
          <h1 className="font-recoleta text-[60px] font-bold">hr.space</h1>
          <p>HRM โปรแกรมบริหารพนักงาน</p>
          <ImgPlaceholder height="400px">HR SPACE IMAGE</ImgPlaceholder>
        </section>
        <section className="flex flex-col items-center py-20 px-10 text-center gap-5">
          <h1 className="font-recoleta text-[60px] font-bold">Drive</h1>
          <p>เก็บไฟล์และอัฟโหลดไฟล์ของคุณ</p>
          <ImgPlaceholder height="400px">DRIVE IMAGE</ImgPlaceholder>
        </section>
      </section>
    </section>
  );
}
