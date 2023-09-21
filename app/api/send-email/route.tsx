// NOTE: Don't expose a send-email API endpoint
//   This is just for training purposes. Emails
//   would normally be sent as part of another
//   processes like new user creation, purchases, etc.

import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  // must be sent from domain you own (not Gmail).
  // must be configured on resend.com/domains
  // Use Github Oauth login
  await resend.emails.send({
    from: "...",
    to: "tony.childs@gmail.com",
    subject: "Whatever",
    react: <WelcomeTemplate name="Tony" />,
  });

  NextResponse.json({});
}
