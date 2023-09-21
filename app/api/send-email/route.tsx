// NOTE: Don't expose a send-email API endpoint
//   This is just for training purposes. Emails
//   would normally be sent as part of another
//   processes like new user creation, purchases, etc.

import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const body = await request.json();
  // must be sent from domain you own (not Gmail).
  // must be configured on resend.com/domains
  // Use Github Oauth login
  // Can use onboarding@resend.dev for a few tests
  // but don't rely on it
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "tony.childs@gmail.com",
    subject: "Hello World",
    react: <WelcomeTemplate name={body.name} />,
  });

  return NextResponse.json({});
}
