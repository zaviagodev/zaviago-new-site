const Footer = () => {
  return (
    <footer className="w-full py-10 md:py-20 bg-black text-white">
      <div className="main-container flex flex-col gap-10">
        <div className="grid lg:grid-cols-3 gap-y-10">
          <div className="space-y-2">
            <p><strong>Zaviago Co.ltd</strong></p>
            <p className="text-sm">Bang Trading Tower<br/>
            999/99 Rama 9 Rd. Suanluang,<br/>
            Bangkok, Thailand, 10250<br/>
            Monday - Friday 09:00 - 18:00</p>
            <p className="text-sm">For more information, please contact us at <a href="mailto:marketing@zaviago.com">marketing@zaviago.com</a></p>
          </div>

          <div>
            <h3>Social media</h3>
            
          </div>
        </div>

        <div>
          <p>Copyright © 2024 Zaviago.co.ltd All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer