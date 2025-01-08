"use client"

import { Button } from "@/components/ui/button";
import { jobsData, JobsDetailsProps } from "../data"

const JobsDesc = ({ params } : { params: {job: string} }) => {
  const jobsid = jobsData.find(data => data.id === params.job)
  const jobsdetails: { key: keyof JobsDetailsProps, label: string }[] = [
    { key: "about_us", label: "About Us" },
    { key: "role_overview", label: "Role Overview" },
    { key: "responsibilities", label: "Responsibilities" },
    { key: "requirements", label: "Requirements" },
    { key: "qualifications", label: "Qualifications" },
    { key: "salary", label: "Salary" }
  ];

  return (
    <section className="small-container py-20 flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        {jobsid?.isUrgent ? <span className="text-red-500 font-semibold border border-red-500 bg-red-100 rounded-sm px-3 py-1 w-fit">URGENT!</span> : null}
        <h1 className="sub-header font-semibold">
          {jobsid?.title}
        </h1>
        <div className="flex gap-4 items-center">
          <span className="border rounded-sm px-3 py-1 text-sm">{jobsid?.type}</span>
          <span className="border rounded-sm px-3 py-1 text-sm">{jobsid?.location}</span>
        </div>
      </div>

      <div className="text-sm flex flex-col gap-4">
        {jobsdetails.map(
          ({ key, label }) => jobsid?.[key] && (
            <span key={key}>
              <strong>{label}: </strong>
              {jobsid[key]}
            </span>
          )
        )}
      </div>

      <Button onClick={() => window.location.href = "/jobs-apply"}>Apply now</Button>
    </section>
  )
}

export default JobsDesc