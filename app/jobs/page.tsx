import JobsList from "./(components)/JobsList"

const JobsSec = () => {
    return (
      <section>
        
      </section>
    )
}

const JobsPage = () => {
  return (
    <section className="main-container py-20 flex flex-col gap-10">
      <h1 className="sub-header font-semibold">Open roles</h1>

      <div className="flex flex-col gap-6">
        <JobsList department="Engineering"/>
        <JobsList department="Design"/>
      </div>
    </section>
  )
}

export default JobsPage