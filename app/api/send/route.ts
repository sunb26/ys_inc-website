import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'
import { EmailTemplate } from '../../components/email/email-template'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req : NextRequest) {
  try {
    const { sender, fullName, phone, message } = await req.json()

    const { data, error } = await resend.emails.send({
      from: 'Admin <onboarding@resend.dev>',
      to: ['sales@yachtingsolutionsinc.com'],
      subject: 'New Message from Yachting Solutions Inc. Website',
      react: EmailTemplate({ sender, fullName, phone, message }) as React.ReactElement,
    });

    if (error) {
      console.log(error)
      return NextResponse.json( { error }, { status: 500 } );
    }

    return NextResponse.json( { data }, { status: 200 } );
  } catch (error) {
    console.log("third error")
    return NextResponse.json( { error }, { status: 500 } );
  }
}
