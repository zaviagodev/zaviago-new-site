import { ReactNode } from "react"

export type JobType = "Full-time" | "Part-time" | "Internship" | "Contract"
export type DepartmentType = "Marketing" | "Engineering" | "Design" | "Product" | "Trainee Program"

export interface JobsDetailsProps {
  about_us?: string | ReactNode
  role_overview?: string | ReactNode
  responsibilities?: string | ReactNode
  qualifications?: string | ReactNode
  requirements?: string | ReactNode
  employees_welfare?: string | ReactNode
  salary?: string | number
}

export interface JobsDataProps extends JobsDetailsProps {
  id: string
  title: string
  type: JobType
  location: string
  isUrgent: boolean
  department: DepartmentType
}

export const jobsData: JobsDataProps[] = [
  {
    id:"react-frontend-engineer",
    title: "React Frontend Engineer",
    type: "Full-time",
    location: "Bangkok",
    isUrgent: true,
    department: "Engineering",
    about_us: "Zaviago.com is at the forefront of the tech startup revolution, offering cutting-edge business management solutions. Our mission is to deliver transformative tools that simplify operations and amplify the digital footprint of businesses. We're on the hunt for an agile and resourceful Project Coordinator to contribute to our journey towards innovation.",
    role_overview: "As a Frontend Software Engineer, you'll play a pivotal role in shaping the user experience of our platform. You'll collaborate closely with our development and design teams to create seamless, visually appealing, and responsive user interfaces. Your expertise will contribute to the evolution of our product, ensuring it remains at the forefront of innovation."
  },
  {
    id:"backend-engineer",
    title: "Backend Engineer",
    type: "Full-time",
    location: "Bangkok",
    isUrgent: true,
    department: "Engineering"
  },
  {
    id:"project-coordinator",
    title: "Project Coordinator",
    type: "Full-time",
    location: "Bangkok",
    isUrgent: false,
    department: "Product"
  },
  {
    id:"uxui-designer",
    title: "UX-UI Designer",
    type: "Full-time",
    location: "Bangkok",
    isUrgent: false,
    department: "Design"
  },
  {
    id:"video-editor",
    title: "Video and Content Editor",
    type: "Full-time",
    location: "Bangkok",
    isUrgent: true,
    department: "Design"
  },
  {
    id:"uxui-trainee",
    title: "UX-UI Trainee",
    type: "Contract",
    location: "Bangkok",
    isUrgent: false,
    department: "Trainee Program"
  },
]