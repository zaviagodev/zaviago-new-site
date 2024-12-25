import { cn } from "@/lib/utils"
import { DataCompProps, investment_thesis_data, investor_data, transaction_data } from "./data"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import InvestmentThesis from "./(components)/InvestmentThesis"
import { companies_icons } from "../data"
import Image from "next/image"
import FeatureCards from "@/components/main/FeatureCards"

const InvestorPage = () => {
  const InvestorData = ({ data, className } : DataCompProps) => {
    return (
      <ul className={cn("grid", className)}>
        {data.map(d => (
          <li className="flex flex-col items-center text-center gap-1 p-12" key={d.title}>
            <h2 className="text-3xl md:text-[56px] font-semibold leading-[1.2em] tracking-[-0.8px] text-shadegray-300 whitespace-pre">{d.title}</h2>
            <p className="text-shadegray-300 text-xl font-medium">{d.desc}</p>
          </li>
        ))}
      </ul>
    )
  }
  return (
    <section>
      <header className="py-10 border-y">
        <div className="flex items-center justify-between main-container">
          <h1 className="text-3xl font-semibold">Investor</h1>
          <h2 className="text-shadegray-300 text-xl font-medium">Why invest?</h2>
        </div>
      </header>

      <section className="py-20">
        <h1 className="main-header text-center">
          We are building <br/>our affordable software <br/>
          for <span className="text-mainpurple">everyone</span>
        </h1>
      </section>

      <section className="py-20 main-container">
        <InvestorData data={investor_data} className="md:grid-cols-2 lg:grid-cols-3"/>
      </section>

      <section className="py-20 flex flex-col items-center gap-6">
        <h1 className="text-shadegray-400 text-[42px] md:text-[56px] font-semibold leading-[1.2em] tracking-[-0.8px] text-center">
          Build to replace these companies<br/>
        </h1>

        <div className="max-w-[500px] w-full mx-auto flex gap-6 flex-wrap justify-center">
          {companies_icons.map((icon, index) => <Image key={index} src={icon} alt={`icon-${index}`} className="w-auto h-6"/>)}
        </div>
        <h2 className="text-shadegray-300 text-[28px] font-semibold">and more...</h2>
      </section>

      <section className="py-20 flex flex-col items-center main-container">
        <h2 className="text-shadegray-300 text-[28px] font-semibold">Business-first focus through product innovation. Lowering <br/>barriers, simplifying operations, catalyzing merchant sales</h2>
        <InvestorData data={transaction_data} className="md:grid-cols-2"/>
      </section>

      <section className="py-20 flex flex-col items-center bg-shadewhite-100">
        <div className="main-container">
          <h1 className="text-shadegray-400 text-[42px] md:text-[56px] font-semibold leading-[1.2em] tracking-[-0.8px] text-center">We've been focusing on becoming<br/> <span className="text-black">the unified commerce operating<br/> system</span> for our merchants since the start</h1>
        </div>
      </section>

      <header className="py-10 border-y">
        <div className="flex items-center justify-between main-container">
          <h1 className="text-3xl font-semibold">Investment Thesis</h1>
          <h2 className="text-shadegray-300 text-xl font-medium">Why invest?</h2>
        </div>
      </header>

      <section className="relative">
        {investment_thesis_data.map(d => (
          <InvestmentThesis key={d.id} id={d.id} title={d.title} desc={d.desc} accordionTitle={d.accordionTitle} accordionDesc={d.accordionDesc}/>
        ))}
      </section>

      <section className="py-20 small-container">
        <h1 className="text-shadegray-400 text-[42px] md:text-[56px] font-semibold leading-[1.2em] tracking-[-0.8px]">We started online and built a commerce platform
        that helps merchants sell everywhere their customers are</h1>

        <p className="text-center">IMAGES OF APPLICATIONS ON THE PHONES</p>
      </section>

      <section className="bg-black py-20">
        <h1 className="text-white text-center text-4xl font-semibold">We solve the biggest challenges in the commerce</h1>
      </section>

      <section className="py-20 small-container">
        <h1 className="text-shadegray-400 text-[42px] md:text-[56px] font-semibold leading-[1.2em] tracking-[-0.8px]"><span className="text-mainpurple">We continue to expand zaviago's breadth</span> to make it even easier for merchants to start and scale their business</h1>
      
        <p className="text-center">IMAGE OF DASHBOARD</p>
      </section>

      <section className="small-container flex flex-col gap-10">
        <h2 className="text-4xl font-semibold"><span className="text-mainpurple">Launching 100+</span> features and updates every six months</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          <FeatureCards />
        </div>
        <h2 className="text-shadegray-400 text-[42px] md:text-[56px] font-semibold leading-[1.2em] tracking-[-0.8px]">With solutions that make it easier for merchants from simple to <span className="text-mainpurple">ERP Platform</span></h2>
        <p className="font-medium text-2xl text-left text-shadegray-200">So that businesses never need to leave Zaviago platform, from first sales to full scale</p>
      </section>

      <section className="small-container flex flex-col gap-10">
        <h2 className="text-4xl font-semibold">Making commerce better for everyone in everything we do.</h2>
      </section>

      <section className="small-container flex flex-col gap-10">
        <h1 className="text-4xl font-semibold">We are creating and expanding our total addressable market through…</h1>
      </section>
    </section>
  )
}

export default InvestorPage