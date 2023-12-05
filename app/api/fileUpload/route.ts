import { NextResponse } from "next/server";
import getCurrentUser from "@/actions/getCurrentUser";
import prisma from "@/lib/prismadb";

export async function POST(
  request: Request, 
) {
    try {
        // Handle file upload and other processing
        // You can call your Discord bot server here

        // Example: POST request to your Discord bot server
        const response = await fetch('https://your-discord-bot-server/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(request.body) // Send the necessary data
        });

        if (!response.ok) {
            throw new Error('Discord bot server responded with an error');
        }

        const data = await response.json();

        // Perform database operations here if necessary

        // Send back the response to the client
        return NextResponse.json(data);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal server error' });
    }
}

export async function GET(
  request: Request,
) {
  return NextResponse.json({status: 405, error: "Method Not Allowed"});
}