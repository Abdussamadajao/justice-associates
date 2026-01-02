import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type Payload = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  practiceArea: string;
  message: string;
};

export async function POST(request: Request) {
  try {
    const body: Payload = await request.json();

    // List of all required fields
    const requiredFields: (keyof Payload)[] = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "practiceArea",
      "message",
    ];

    // Validate all required fields
    for (const field of requiredFields) {
      if (!body[field]?.trim()) {
        return NextResponse.json(
          { message: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      to: "ajaoabdussamad@gmail.com",
      from: process.env.EMAIL,
      replyTo: body.email,
      subject: `Consultation Request from ${body.firstName} ${body.lastName} - ${body.practiceArea}`,
      html: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Consultation Request</title>
<style>
  body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
  }
  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  .header {
    background-color: #f8f9fa;
    padding: 15px;
    text-align: center;
    border-bottom: 1px solid #ddd;
  }
  .details {
    padding: 20px;
  }
  .detail-row {
    margin-bottom: 10px;
  }
  .detail-label {
    font-weight: bold;
    color: #2c3e50;
    display: inline-block;
    width: 120px;
  }
</style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>New Consultation Request</h2>
    </div>
    <div class="details">
      <div class="detail-row">
        <span class="detail-label">Name:</span>
        ${body.firstName} ${body.lastName}
      </div>
      <div class="detail-row">
        <span class="detail-label">Email:</span>
        ${body.email}
      </div>
      <div class="detail-row">
        <span class="detail-label">Phone:</span>
        ${body.phone}
      </div>
      <div class="detail-row">
        <span class="detail-label">Practice Area:</span>
        ${body.practiceArea}
      </div>
      <div class="detail-row">
        <span class="detail-label">Message:</span>
      </div>
      <div style="padding: 10px; background-color: #f8f9fa; border-radius: 5px; margin-top: 5px;">
        ${body.message}
      </div>
    </div>
  </div>
</body>
</html>`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
