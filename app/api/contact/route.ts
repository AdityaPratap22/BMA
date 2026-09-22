import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required fields.' },
        { status: 400 }
      );
    }

    // Process contact submission (e.g., save to DB or send email via Resend/SendGrid)
    console.log('New Lead Submission:', { name, email, phone, service, message });

    return NextResponse.json({
      success: true,
      message: 'Lead submission received successfully.',
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process lead submission.' },
      { status: 500 }
    );
  }
}
