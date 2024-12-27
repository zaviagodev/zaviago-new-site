"use client"

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function ChatPage() {
  const [user, setUser] = useState({
    name:"Changlin Yu",
    avatar:"CY"
  })
  const randomChatText: string[] = ["If you have any questions, please feel free to ask."]
  return (
    <div className="flex h-screen w-full">
      <div className="border-r border-gray-200 dark:border-gray-800 w-80 bg-white dark:bg-gray-950 overflow-y-auto">
        <div className="px-4 py-6">
          <h2 className="text-lg font-semibold">Conversations</h2>
        </div>
        <div className="flex flex-col gap-4 px-4 py-2">
          <Button className="flex items-center gap-3 rounded-md p-3 hover:bg-gray-100 dark:hover:bg-gray-800" variant="ghost"
            onClick={() => setUser({ name:"Changlin Yu", avatar:"CY" })}
          >
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" alt="Olivia Davis" />
              <AvatarFallback>CY</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="font-medium">Changlin Yu</h4>
                <span className="text-xs text-gray-500 dark:text-gray-400">2h ago</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">
                Hey, let's discuss the project details.
              </p>
            </div>
          </Button>
          <Button
            className="flex items-center gap-3 rounded-md p-3 hover:bg-gray-100 dark:hover:bg-gray-800" variant="ghost"
            onClick={() => setUser({ name:"Markus Zhang", avatar:"MZ" })}
          >
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" alt="John Doe" />
              <AvatarFallback>MZ</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="font-medium">Markus Zhang</h4>
                <span className="text-xs text-gray-500 dark:text-gray-400">1d ago</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">
                Sounds good, let's schedule a call.
              </p>
            </div>
          </Button>
          <Button
            className="flex items-center gap-3 rounded-md p-3 hover:bg-gray-100 dark:hover:bg-gray-800" variant="ghost"
            onClick={() => setUser({ name:"Michael Justin", avatar:"MJ" })}
          >
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" alt="Jane Smith" />
              <AvatarFallback>MJ</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="font-medium">Michael Justin</h4>
                <span className="text-xs text-gray-500 dark:text-gray-400">3d ago</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">
                I have some questions about the design.
              </p>
            </div>
          </Button>
        </div>
      </div>
      <div className="flex-1 bg-white dark:bg-gray-950 overflow-y-auto">
        <div className="flex h-full flex-col">
          <div className="border-b border-gray-200 dark:border-gray-800 px-6 py-4">
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" alt="Olivia Davis" />
                <AvatarFallback>{user.avatar}</AvatarFallback>
              </Avatar>
              <h3 className="text-lg font-semibold">{user.name}</h3>
            </div>
          </div>
          <div className="flex-1 p-6 space-y-4">
            <div className="flex items-start gap-4">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" alt="Olivia Davis" />
                <AvatarFallback>{user.avatar}</AvatarFallback>
              </Avatar>
              <div className="flex-1 rounded-md bg-gray-100 dark:bg-gray-800 p-4">
                <p>Hey, let's discuss the project details.</p>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">2h ago</div>
              </div>
            </div>
            <div className="flex items-start gap-4 justify-end">
              <div className="flex-1 rounded-md bg-primary text-white p-4">
                <p>Sounds good, let's schedule a call.</p>
                <div className="text-xs text-gray-300 mt-2">1h ago</div>
              </div>
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" alt="John Doe" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex items-start gap-4">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" alt="Olivia Davis" />
                <AvatarFallback>{user.avatar}</AvatarFallback>
              </Avatar>
              <div className="flex-1 rounded-md bg-gray-100 dark:bg-gray-800 p-4">
                <p>Great, let's plan for tomorrow at 2pm.</p>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">30m ago</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-800 px-6 py-4">
            <div className="flex items-center gap-4">
              <Input className="flex-1" placeholder="Type your message..." />
              <Button>Send</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}