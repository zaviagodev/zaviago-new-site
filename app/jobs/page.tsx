import JobsList from "./(components)/JobsList"

const JobsPage = () => {
  return (
    <section className="main-container py-20 flex flex-col gap-10">
      <h1 className="sub-header font-semibold">Open roles</h1>

      <div className="flex flex-col gap-6">
        <JobsList department="Engineering"/>
        <JobsList department="Design"/>
        <JobsList department="Marketing"/>
        <JobsList department="Trainee Program"/>
      </div>
    </section>
  )
}

export default JobsPage