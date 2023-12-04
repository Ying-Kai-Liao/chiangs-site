"use client";
import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/libs/utils";

type FormData = {
  content: String;
};

type Message = {
  role: String;
  content: String;
};

export default function Chatbox() {
  const [messages, setMessages] = useState<Message[]>([]);
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => {
    setMessages((prev) => [...prev, { role: "user", content: data.content }]);
    console.log(data);
    setValue("content", "");
    try {
      console.log("fine");
    } catch (error) {
      console.log(error);
    }
    setMessages((prev) => [
      ...prev,
      { role: "assistant", content: "good job" },
    ]);
  });

  const lastMessageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <Card className={cn("flex flex-col max-w-sm w-full")}>
      <CardHeader>
        <CardTitle>Chat AI</CardTitle>
        <CardDescription>
          asking anything about virtual assistant
        </CardDescription>
      </CardHeader>
      <CardContent className="h-[50vh] mb-5">
        <ScrollArea className="h-full w-full pr-4">
          {messages?.map((message, index) => {
            return (
              <div
                key={index}
                className="flex gap-3 text-slate-600 text-sm mb-4"
                ref={index === messages.length - 1 ? lastMessageRef : null}
              >
                {message.role == "assistant" && (
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                )}
                {message.role == "user" && (
                  <Avatar>
                    <AvatarImage src="https://github.com/diego3g.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                )}
                <p className="leading-relaxed">
                  <span className="block font-bold text-slate-700">
                    {message.role == "assistant" ? "AI Service" : "UserName"}
                  </span>
                  {message.content}
                </p>
              </div>
            );
          })}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form className="grid grid-cols-4 space-x-3" onSubmit={onSubmit}>
          <Input
            type="message"
            {...register("content")}
            placeholder="How can I help you?"
            className="col-span-3"
          />
          <Button type="submit" className="">
            Send
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
