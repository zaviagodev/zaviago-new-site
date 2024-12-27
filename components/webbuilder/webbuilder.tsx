import Link from "next/link"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export default function WebbuilderComp() {
  return (
    <div className="grid h-screen w-full min-h-screen lg:grid-cols-[280px_1fr]">
      <div className="border-r bg-gray-100/40 dark:bg-gray-800/40">
        <div className="flex h-[60px] items-center border-b px-6">
          <Link href="#" className="flex items-center gap-2 font-semibold" prefetch={false}>
            <Package2Icon className="h-6 w-6" />
            <span className="">Acme Inc</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto p-4">
          <div className="flex items-center gap-4">
            <Avatar className="w-10 h-10">
              <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
              <div>MM</div>
            </Avatar>
            <div className="flex-1">
              <h1 className="font-semibold text-lg">Website Builder</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">Drag and drop components to build your website</p>
            </div>
          </div>
          <div className="grid gap-4 mt-4">
            <div className="flex items-center gap-4">
              <LayoutTemplateIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
              <Button variant="outline">
                Add section
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <TypeIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
              <Button variant="outline">
                Add text
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <ImageIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
              <Button variant="outline">
                Add image
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <VideoIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
              <Button variant="outline">
                Add video
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <FileIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
              <Button variant="outline">
                Add file
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <CodeIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
              <Button variant="outline">
                Add code
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <MailIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
              <Button variant="outline">
                Add form
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <CalendarIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
              <Button variant="outline">
                Add calendar
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <TableIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
              <Button variant="outline">
                Add table
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <BarChartIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
              <Button variant="outline">
                Add chart
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <MapIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
              <Button variant="outline">
                Add map
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <Package2Icon className="h-6 w-6" />
          <h1 className="font-semibold text-lg">Components</h1>
          <Button size="icon" variant="ghost" className="ml-auto h-8 w-8">
            <PlusIcon className="h-4 w-4" />
            <span className="sr-only">Add component</span>
          </Button>
        </header>
        <main className="flex-1 flex items-center justify-center p-4">
          <div className="flex-1 border border-dashed border-gray-200 rounded-lg border-gray-200 dark:border-gray-800">
            <div className="h-[500px] border-b border-gray-200 border-gray-200 dark:border-gray-800 dark:border-gray-800" />
            <div className="flex items-center justify-center h-[200px] text-center text-sm text-gray-500 dark:text-gray-400">
              Drag and drop components here
            </div>
          </div>
          <div className="flex flex-col w-[280px] ml-4">
            <div className="flex items-center gap-4 p-4 border-b border-gray-200 border-gray-200 dark:border-gray-800 dark:border-gray-800">
              <LayoutTemplateIcon className="w-6 h-6" />
              <span className="font-medium">Section</span>
              <Button size="icon" variant="ghost" className="ml-auto h-4 w-4">
                <ChevronRightIcon className="h-4 w-4" />
                <span className="sr-only">Toggle section</span>
              </Button>
            </div>
            <div className="flex items-center gap-4 p-4 border-b border-gray-200 border-gray-200 dark:border-gray-800 dark:border-gray-800">
              <TypeIcon className="w-6 h-6" />
              <span className="font-medium">Text</span>
              <Button size="icon" variant="ghost" className="ml-auto h-4 w-4">
                <ChevronRightIcon className="h-4 w-4" />
                <span className="sr-only">Toggle section</span>
              </Button>
            </div>
            <div className="flex items-center gap-4 p-4 border-b border-gray-200 border-gray-200 dark:border-gray-800 dark:border-gray-800">
              <ImageIcon className="w-6 h-6" />
              <span className="font-medium">Image</span>
              <Button size="icon" variant="ghost" className="ml-auto h-4 w-4">
                <ChevronRightIcon className="h-4 w-4" />
                <span className="sr-only">Toggle section</span>
              </Button>
            </div>
            <div className="flex items-center gap-4 p-4 border-b border-gray-200 border-gray-200 dark:border-gray-800 dark:border-gray-800">
              <VideoIcon className="w-6 h-6" />
              <span className="font-medium">Video</span>
              <Button size="icon" variant="ghost" className="ml-auto h-4 w-4">
                <ChevronRightIcon className="h-4 w-4" />
                <span className="sr-only">Toggle section</span>
              </Button>
            </div>
            <div className="flex items-center gap-4 p-4 border-b border-gray-200 border-gray-200 dark:border-gray-800 dark:border-gray-800">
              <FileIcon className="w-6 h-6" />
              <span className="font-medium">File</span>
              <Button size="icon" variant="ghost" className="ml-auto h-4 w-4">
                <ChevronRightIcon className="h-4 w-4" />
                <span className="sr-only">Toggle section</span>
              </Button>
            </div>
            <div className="flex items-center gap-4 p-4 border-b border-gray-200 border-gray-200 dark:border-gray-800 dark:border-gray-800">
              <CodeIcon className="w-6 h-6" />
              <span className="font-medium">Code</span>
              <Button size="icon" variant="ghost" className="ml-auto h-4 w-4">
                <ChevronRightIcon className="h-4 w-4" />
                <span className="sr-only">Toggle section</span>
              </Button>
            </div>
            <div className="flex items-center gap-4 p-4 border-b border-gray-200 border-gray-200 dark:border-gray-800 dark:border-gray-800">
              <MailIcon className="w-6 h-6" />
              <span className="font-medium">Form</span>
              <Button size="icon" variant="ghost" className="ml-auto h-4 w-4">
                <ChevronRightIcon className="h-4 w-4" />
                <span className="sr-only">Toggle section</span>
              </Button>
            </div>
            <div className="flex items-center gap-4 p-4 border-b border-gray-200 border-gray-200 dark:border-gray-800 dark:border-gray-800">
              <CalendarIcon className="w-6 h-6" />
              <span className="font-medium">Calendar</span>
              <Button size="icon" variant="ghost" className="ml-auto h-4 w-4">
                <ChevronRightIcon className="h-4 w-4" />
                <span className="sr-only">Toggle section</span>
              </Button>
            </div>
            <div className="flex items-center gap-4 p-4 border-b border-gray-200 border-gray-200 dark:border-gray-800 dark:border-gray-800">
              <TableIcon className="w-6 h-6" />
              <span className="font-medium">Table</span>
              <Button size="icon" variant="ghost" className="ml-auto h-4 w-4">
                <ChevronRightIcon className="h-4 w-4" />
                <span className="sr-only">Toggle section</span>
              </Button>
            </div>
            <div className="flex items-center gap-4 p-4 border-b border-gray-200 border-gray-200 dark:border-gray-800 dark:border-gray-800">
              <BarChartIcon className="w-6 h-6" />
              <span className="font-medium">Chart</span>
              <Button size="icon" variant="ghost" className="ml-auto h-4 w-4">
                <ChevronRightIcon className="h-4 w-4" />
                <span className="sr-only">Toggle section</span>
              </Button>
            </div>
            <div className="flex items-center gap-4 p-4 border-b border-gray-200 border-gray-200 dark:border-gray-800 dark:border-gray-800">
              <MapIcon className="w-6 h-6" />
              <span className="font-medium">Map</span>
              <Button size="icon" variant="ghost" className="ml-auto h-4 w-4">
                <ChevronRightIcon className="h-4 w-4" />
                <span className="sr-only">Toggle section</span>
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

function BarChartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  )
}


function CalendarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function ChevronRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function CodeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}


function FileIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  )
}


function ImageIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  )
}


function LayoutTemplateIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="7" x="3" y="3" rx="1" />
      <rect width="9" height="7" x="3" y="14" rx="1" />
      <rect width="5" height="7" x="16" y="14" rx="1" />
    </svg>
  )
}


function MailIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function MapIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" />
      <path d="M15 5.764v15" />
      <path d="M9 3.236v15" />
    </svg>
  )
}


function Package2Icon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  )
}


function PlusIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


function TableIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3v18" />
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9h18" />
      <path d="M3 15h18" />
    </svg>
  )
}


function TypeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="4 7 4 4 20 4 20 7" />
      <line x1="9" x2="15" y1="20" y2="20" />
      <line x1="12" x2="12" y1="4" y2="20" />
    </svg>
  )
}


function VideoIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
      <rect x="2" y="6" width="14" height="12" rx="2" />
    </svg>
  )
}