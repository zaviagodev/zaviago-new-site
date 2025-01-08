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
  {
    id:"marketing-communication",
    title: "Marketing Communication Specialist",
    type: "Full-time",
    location: "Bangkok",
    isUrgent: true,
    department: "Marketing",
    about_us:<>Calling all creative storytellers! 👀<br/><br/>
    We're looking for a creative and engaging individual to become the face of our brand on social media! Here's what you'll get to do:
    Become a Brand Ambassador: Craft captivating social media videos that showcase our amazing products. You'll be the on-camera personality, using your storytelling skills to bring our company's culture and values to life!

    Marketing Strategy for Growth: Develop and implement a marketing plan to enhance our content strategy, brand communication and brand image.

    Video Whiz: You'll dream up and create engaging videos that introduce our products and provide helpful tips to our social media audience.

    Social Media Mastermind: Build, manage, and create awesome content for all our platforms, including Facebook, Twitter, Instagram, LINE OA, and more to come!

    Community Champion: Monitor and engage with our social media followers to build a strong reputation and keep the positive vibes flowing.

    Trend Spotter: Be on the lookout for new ways to engage with our audience and explore exciting new channels to connect with potential customers!
    </>,
    qualifications:<>
    Bachelor's degree in any field.

    0-2 years of experience in Marketing, Advertising or Content Creation (new graduates are welcome).
    Excellent written and verbal communication skills in both Thai and English.
    Comfortable being in the public content of the company, both in video and image format.
    Thrives in a fast-paced environment.
    A Portfolio showcasing relevant marketing projects is a plus.</>
  }
]