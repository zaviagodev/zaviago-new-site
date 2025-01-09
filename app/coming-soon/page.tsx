import { textGradient } from "@/lib/utils"
import Link from "next/link"

const ComingSoon = () => {
  return (
    <section className="fixed top-0 h-dvh w-dvw left-0 bg-black flex flex-col gap-12 items-center z-[99] text-center p-12">
      <div className="max-w-[800px] w-full mx-auto flex items-center justify-between">
        <Link className="!text-white !bg-transparent" href="/">Go back</Link>
      </div>
      <div className="max-w-[800px] w-full mx-auto">
        <div className="flex flex-col gap-6 justify-center h-[70dvh]">
          <h1 className="font-recoleta text-6xl font-medium" style={textGradient("linear-gradient(87deg, rgb(255, 255, 255) 0%, rgb(138, 138, 138) 100%)")}>Zaviago 2.0 <br/>is arriving soon</h1>
          <p style={textGradient("linear-gradient(87deg, rgb(255, 255, 255) 0%, rgb(138, 138, 138) 100%)")}>Discover an array of incredible business platforms and be prepared for an exciting wave of new business tools at the horizon. Sign up to our waitlist to be notified when our services are launched!</p>
        </div>
      </div>
    </section>
  )
}

export default ComingSoon