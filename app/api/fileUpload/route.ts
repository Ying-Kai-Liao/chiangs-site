import { NextRequest, NextResponse } from "next/server";
import getCurrentUser from "@/actions/getCurrentUser";
import prisma from "@/lib/prismadb";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  for (let [key, value] of formData.entries()) {
    console.log(key, value);
  }
  const user = await getCurrentUser();

  // Check if user is retrieved successfully
  if (!user) {
    throw new Error("User not authenticated");
  }

  try {
    const response = await fetch(
      "https://discord-bot-ten-nu.vercel.app/api/discordbot",
      {
        method: "POST",
        body: formData, // Send the necessary data
      }
    );

    if (!response.ok) {
      throw new Error("Discord bot server responded with an error");
    }

    const res = await response.json();
    const parts = res.name.split(".");
    const title = parts[0];
    const type = parts[parts.length - 1];

    const newMedia = await prisma.media.create({
      data: {
        title,
        description: "",
        type,
        url: res.url as string,

        userId: user.id, // Assuming you have a relation to a user
      },
    });

    if (!newMedia) {
      return NextResponse.json({ error: "data saving error" });
    }

    // some function that creates new Media object with the session userid

    return NextResponse.json(newMedia);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal server error" });
  }
}

export async function GET(request: Request) {
  return NextResponse.json({ status: 405, error: "Method Not Allowed" });
}
