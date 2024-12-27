import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Input } from "@/components/ui/input"

export default function Printing() {
  return (
    <main className="w-full max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-24">
      <div className="grid gap-12 md:gap-16">
        <section>
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Upload Your Document</h2>
            <p className="max-w-[600px] text-gray-500 dark:text-gray-400">
              Start your printing order by uploading your document. We support a variety of file formats.
            </p>
            <div className="w-full max-w-sm">
              <Button size="lg" className="w-full">
                Upload Document
              </Button>
            </div>
          </div>
          <div className="mt-8 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <div className="grid gap-4">
              <div className="flex items-center gap-3">
                <UploadIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                <span className="text-sm font-medium text-gray-900 dark:text-gray-50">
                  Supported file types: PDF, JPG, PNG
                </span>
              </div>
              <div className="flex items-center gap-3">
                <PaperclipIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                <span className="text-sm font-medium text-gray-900 dark:text-gray-50">Maximum file size: 50MB</span>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Printing Preferences</h2>
            <p className="max-w-[600px] text-gray-500 dark:text-gray-400">
              Customize your printing settings to get the perfect output.
            </p>
          </div>
          <div className="mt-8 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <div className="grid gap-6">
              <div className="grid grid-cols-2 items-center gap-4">
                <Label htmlFor="paper-size" className="text-right">
                  Paper Size
                </Label>
                <Select id="paper-size" className="col-span-1">
                  <SelectTrigger>
                    <SelectValue placeholder="Select paper size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="a4">A4</SelectItem>
                    <SelectItem value="letter">Letter</SelectItem>
                    <SelectItem value="legal">Legal</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 items-center gap-4">
                <Label htmlFor="orientation" className="text-right">
                  Orientation
                </Label>
                <Select id="orientation" className="col-span-1">
                  <SelectTrigger>
                    <SelectValue placeholder="Select orientation" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="portrait">Portrait</SelectItem>
                    <SelectItem value="landscape">Landscape</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 items-center gap-4">
                <Label htmlFor="copies" className="text-right">
                  Copies
                </Label>
                <Input id="copies" type="number" min="1" defaultValue="1" className="col-span-1" />
              </div>
              <div className="flex justify-end">
                <Button>Save Preferences</Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

function PaperclipIcon(props: any) {
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
      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
    </svg>
  )
}


function UploadIcon(props: any) {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  )
}