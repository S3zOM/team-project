import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();
    const { name, email, message } = data;

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required." }),
        { status: 400 }
      );
    }

    // Validate email format (simple regex)
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return new Response(JSON.stringify({ error: "Invalid email address." }), {
        status: 400,
      });
    }

    // Setup nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Send email to admin (yourself)
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      html: `<p><b>Name:</b> ${name}</p>
             <p><b>Email:</b> ${email}</p>
             <p><b>Message:</b></p>
             <blockquote>${message}</blockquote>`,
    });

    // Auto-response to the visitor
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: "Thank you for contacting us!",
      html: `<p>Hi ${name},</p>
             <p>We received your message:</p>
             <blockquote>${message}</blockquote>
             <p>We will get back to you soon!</p>
             <p>— Your Company</p>`,
    });

    return new Response(
      JSON.stringify({ message: "Message sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({
        error: "Failed to send email. Please try again later.",
      }),
      { status: 500 }
    );
  }
}
