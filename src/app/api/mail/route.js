"use server";

import { MailtrapClient } from "mailtrap";
import { NextResponse } from "next/server";

const TOKEN =process.env.MAILTRAP_TOKEN;
const ENDPOINT = process.env.MAILTRAP_ENDPOINT;



const client = new MailtrapClient({ endpoint: ENDPOINT, token: TOKEN });

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    console.log("Received data:", { name, email, subject, message });

    const sender = {
      email: "mailtrap@demomailtrap.com",
      name: "portfolio",
    };

    const recipients = [
      {
        email: "nitinvermanv61506@gmail.com",
      },
    ];

    const emailContent = `
            Name: ${name}
            
            Email: ${email}
            subject:${subject}
           
            Message: ${message}
        `;

    const sendResult = await client.send({
      from: sender,
      to: recipients,
      subject: `Career Application: ${subject}`,
      text: emailContent,
      category: "Career Application",
    });

    console.log("Email sent:", sendResult);

    return NextResponse.json(
      { message: "Application sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send application", error: error.message },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  return NextResponse.json(
    { message: "Only POST requests are allowed" },
    { status: 405 }
  );
}
