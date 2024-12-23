const InvestorPage = () => {
  return (
    <section>
      <header className="py-10 border-y">
        <div className="flex items-center justify-between main-container">
          <h1 className="text-3xl font-semibold">Investor</h1>
          <h2 className="text-shadegray-300 text-xl font-medium">Why invest?</h2>
        </div>
      </header>

      <section className="py-20">
        <h1 className="text-shadegray-400 text-[42px] md:text-[78px] font-semibold leading-[1.2em] tracking-[-0.8px] text-center">
          We are building <br/>our affordable software <br/>
          for <span className="text-mainpurple">everyone</span>
        </h1>
      </section>
    </section>
  )
}

export default InvestorPage