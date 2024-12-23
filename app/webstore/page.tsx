import { Button } from "@/components/ui/button"

const WebstorePage = () => {
  return (
    <section className="flex flex-col gap-10 py-20">
      <section className="flex flex-col gap-10 items-center">
        <div className="flex flex-col text-center font-semibold">
          <h2 className="text-3xl">เปิดร้านออนไลน์</h2>
          <h1 className="text-[180px] leading-[150px]">ใหม่ของคุณ</h1>
        </div>

        <p className="text-center">IMAGE OF THE STORE PAGE</p>

        <Button>เปิดเว็บฟรี</Button>
      </section>

      <section className="flex flex-col gap-10 items-center py-20">
        <p className="text-shadegray font-semibold text-center">สร้างร้านค้าออนไลน์ให้แบรนด์คุณเอง<br/>ต่อระบบสะสมแต้มและฟีเจอร์อื่นๆอีกมากมาย</p>

        <p className="text-center">IMAGE OF ITEM CARDS</p>
      </section>
    </section>
  )
}

export default WebstorePage