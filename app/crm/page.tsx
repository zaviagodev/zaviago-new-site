import ImgPlaceholder from "@/components/ImgPlaceholder"
import PhoneConnection from "@/components/PhoneConnection"

const CRMPage = () => {
  return (
    <section className="flex flex-col gap-10 pt-20">
      <section className="flex flex-col gap-10 items-center main-container">
        <div className="flex flex-col text-center font-semibold">
          <h2 className="text-3xl">CRM System for</h2>
          <h1 className="text-[180px] leading-[150px]">Points & Rewards</h1>
        </div>

        <ImgPlaceholder height="600px">
          <p className="text-center">IMAGE OF THE CRM PAGE</p>
        </ImgPlaceholder>
      </section>

      <section className="flex flex-col gap-10 py-20 main-container">
        <div className="space-y-4 text-center">
          <h2 className="text-4xl font-semibold text-shadegray-400">เก็บข้อมูลสมาชิก สะสมแต้ม<br/> และแลกของรางวัลผ่าน Line OA</h2>
          <p className="text-xl font-semibold text-shadegray-200">เพิ่มยอดขายและลูกค้าประจำด้วย Zaviago CRM <span className="text-shadegray-300">ระบบสะสม<br/>แต้มที่สามารถบริหารและแบ่งระดับสมาชิก สร้างของรางวัล<br/> คูปอง กระตุ้นยอดขาย</span> ให้ลูกค้าประทับใจไม่แพ้บริษัทใหญ่</p>
        </div>

        <ImgPlaceholder height="600px">PHONE PLACEHOLDER</ImgPlaceholder>

        <div className="small-container font-medium text-2xl text-left text-shadegray-200 grid md:grid-cols-2 gap-4 pt-20">
          <h2 className="p-12">ดึงดูดลูกค้าของคุณเข้าสู่ระบบ<span className="text-shadegray-300">สะสมแต้ม สร้างของรางวัล เพิ่มคูปอง มอบสิทธิพิเศษ</span> กระตุ้นการขายอย่างต่อเนื่อง</h2>
          <h2 className="p-12">เข้าถึงได้ง่ายผ่าน<span className="text-shadegray-300">แพลตฟอร์มออนไลน์</span> ที่คุณสามารถสร้างสรรค์ จัดการ ปรับแต่ง ตรงตามใจคุณ</h2>
        </div>
      </section>

      <PhoneConnection />

      <section className="flex flex-col items-center gap-10 main-container">
        <h2 className="sub-header text-center font-semibold">ใช้ง่าย ฟีเจอร์เต็ม เปิดตัวระบบสมาชิก<br/>ของคุณเพียงไม่กี่คลิก</h2>
        <ImgPlaceholder height="600px">PHONE IMAGE</ImgPlaceholder>

        <div className="small-container font-medium text-2xl text-left text-shadegray-200 grid md:grid-cols-2 gap-4 pt-20">
          <h2 className="p-12">แอดมินสามารถจัดการแต้มลูกค้าอย่างง่ายดายตามยอดขำระเงินและ ลูกค้าสามารถใช้แต้มในการแลกของรางวัลผ่านหน้าเว็บไซต์</h2>
          <h2 className="p-12">โดยคุณสามารถมีเว็บไซต์เหมือนซูปเปอร์แอปที่ตอบโจทย์รูปแบบธุรกิจของคุณโดยไม่จำเป็นต้องใช้เงินมหาศาล</h2>
        </div>
      </section>

      <section className="bg-shadegray-500 py-20">
        <div className="main-container flex flex-col gap-10">
          <h2 className="sub-header text-center font-semibold">สแกน QR และ OTP<br/> ก็เป็นสมาชิกได้เลย</h2>

          <ImgPlaceholder height="600px">PHONE IMAGE</ImgPlaceholder>

          <div className="small-container font-medium text-2xl text-left text-shadegray-200 grid md:grid-cols-2 gap-4 pt-20">
            <h2 className="p-12">เชื่อมต่อกับ LINE OA ของธุรกิจคุณ เพื่อให้ลูกค้าสามารถเช็คพอยท์ แลกของรางวัล และใช้คูปองได้สะดวกขึ้น</h2>
            <h2 className="p-12">เพียงสแกน QR CODE และกรอก OTP ก็สมัครเป็นสมาชิกได้ทันทีพร้อมสะสมแต้ม</h2>
          </div>
        </div>
      </section>

      <section className="main-container">
        <h2 className="sub-header font-semibold">ลูกค้าแลกแต้มและ<br/>รับของรางวัลผ่านมือถือได้เลย</h2>

        <ImgPlaceholder height="600px">SCAN PHONE PLACEHOLDER</ImgPlaceholder>
      </section>

      <section className="small-container flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h2 className="sub-header font-semibold">แลกรางวัลเสร็จ แอดมิน<br/>สามารถเช็คได้เลยที่หน้าร้าน</h2>
          <ImgPlaceholder height="600px">SCAN PHONE PLACEHOLDER</ImgPlaceholder>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="sub-header font-semibold">ตอบโจทย์การดูแล<br/>แบบ Omnichannel</h2>
          <p className="text-xl font-semibold text-shadegray-200">เพิ่มยอดขาย สร้างประสบการณ์ที่ดีให้กับลูกค้า<br/>ตั้งแต่วันแรก จนกลายมาเป็นลูกค้าประจำที่กลับ<br/>มาซื้อซ้ำและใช้บริการอย่างต่อเนื่อง</p>
          <ImgPlaceholder height="600px">SCAN PHONE PLACEHOLDER</ImgPlaceholder>
        </div>
      </section>

      <section className="small-container flex flex-col gap-10">
        <h2 className="text-4xl font-semibold">ใช้ง่ายฟีเจอร์เต็ม <br/>เปิดตัวระบบสมาชิกของคุณ<br/>เพียงไม่กี่คลิก</h2>

        <ImgPlaceholder height="600px">SCAN PHONE PLACEHOLDER</ImgPlaceholder>
        <div className="flex gap-5">
          <ImgPlaceholder height="600px">
            <p className="text-center">ONE VIDEO Placeholder</p>
          </ImgPlaceholder>
          <ImgPlaceholder height="600px">
            <p className="text-center">ONE VIDEO Placeholder</p>
          </ImgPlaceholder>
        </div>

        <div className="small-container font-medium text-2xl text-left text-shadegray-200 grid md:grid-cols-2 gap-4">
          <h2 className="p-12">รวมทุกฟีเจอร์ การจัดการธุรกิจ ออนไลน์และออฟไลน์ จัดการคำสั่งซื้ออย่างเป็นระบบ สุดปังกับฟีเจอร์ที่ครอบคลุมทุกรูปแบบ</h2>
          <h2 className="p-12">ไม่ว่าคุณจะมีกี่ช่องทางการขายก็จัดการได้ ช่วยลดเวลาในการทำงาน และเพิ่มโอกาสในการสร้างกำไร</h2>
        </div>
      </section>

      <section className="bg-black -mb-20 py-20 main-container flex flex-col gap-10">
        <div className="flex items-center justify-center h-[400px] text-center">
          <h1 className="sub-header !text-white font-semibold">สร้างประสบการณ์ดีๆ<br/>ให้ลูกค้าคุณ</h1>
        </div>

        <div className="space-y-4 small-container">
          <h2 className="text-4xl font-semibold text-shadegray-500">เชื่อมต่อกับระบบ POS ของซาเวียโก<br/>และ Omni Channel ได้อีกด้วย</h2>
          <p className="text-xl font-semibold text-shadegray-200">เพิ่มยอดขายและลูกค้าประจำด้วย Zaviago CRM ระบบสะสมแต้มที่สามารถบริหารและแบ่งระดับสมาชิก สร้างของรางวัล คูปอง กระตุ้นยอดขาย ให้ลูกค้าประทับใจไม่แพ้บริษัทใหญ่</p>
        </div>

        <ImgPlaceholder height="600px">SCAN PHONE PLACEHOLDER</ImgPlaceholder>

        <div className="small-container font-medium text-2xl text-left text-shadegray-200 grid md:grid-cols-2 gap-4">
          <h2 className="p-12">ดึงดูดลูกค้าของคุณเข้าสู่ระบบสะสมแต้ม สร้างของรางวัล เพิ่มคูปอง มอบสิทธิพิเศษ กระตุ้นการขายอย่างต่อเนื่อง</h2>
          <h2 className="p-12">เข้าถึงได้ง่ายผ่านแพลตฟอร์มออนไลน์ ที่คุณสามารถสร้างสรรค์ จัดการ ปรับแต่ง ตรงตามใจคุณ</h2>
        </div>
      </section>
    </section>
  )
}

export default CRMPage