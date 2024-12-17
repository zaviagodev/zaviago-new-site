import MainDashboard from "@/components/dashboard/main-dashboard";

export default function Home() {
  return (
    <section className="text-center">
      <section className="flex flex-col gap-10">
        <h1>IMAGE WILL BE PASTED SOON!</h1>
        <h1 className="text-[78px] font-semibold leading-[1.2em]">
          จัดการงานและธุรกิจ<br/>
          <span className="text-[#3d08ff]">ทั้งหมด</span>
          ของคุณ
        </h1>
        <p className="text-shadegray font-semibold">แพลตฟอร์ม WorkSuite ตั้งแต่จัดการธุรกิจ จัดการโปรเจ็ค, สร้างเว็บไซต์, ขายสินค้า , <br/>จัดการคำสั่งซื้อ ระบบ CRM และ Point & Reward จนถึง ระบบรวมแชท</p>

        <aside className="overflow-hidden relative shadow-main rounded-lg">
          <MainDashboard />
        </aside>
      </section>
    </section>
  );
}
