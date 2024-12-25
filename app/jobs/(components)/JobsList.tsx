import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { DepartmentType, jobsData } from "../data"
import Link from "next/link"

interface JobsListProps {
  department: DepartmentType
}

const JobsList = ({ department } : JobsListProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-medium">{department}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {jobsData.filter(data => data.department === department).map(data => (
          <Link href={`jobs/${data.id}`} key={data.title}>
          <Card>
            <CardHeader>
              <CardTitle>{data.title}</CardTitle>
              <CardDescription>{data.type}</CardDescription>
            </CardHeader>
          </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default JobsList