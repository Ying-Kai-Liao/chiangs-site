'use client'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import Chatbox from "@/components/ChatBox"

export default function CustomerService () {
    return (
        <Popover>
            <PopoverTrigger>Need some help?</PopoverTrigger>
            <PopoverContent>
                <Chatbox/>
            </PopoverContent>
        </Popover>
    )
}
  