"use server";

import { Resend } from "resend";

type ContactFormState = {
  status: "idle" | "success" | "error";
};

const resend = new Resend(process.env.RESEND_API_KEY);

export async function SendEmail(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = formData.get("name")?.toString().trim();
  const senderEmail = formData.get("SenderEmail")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  if (!name || !senderEmail || !message) {
    return { status: "error" };
  }

  if (!process.env.RESEND_API_KEY) {
    return { status: "error" };
  }

  try {
    const { error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "mokoneseptember@gmail.com",
      subject: `${name} from Contact Form`,
      replyTo: senderEmail,
      text: `Name: ${name}\nSender email: ${senderEmail}\n\n${message}`,
    });

    if (error) {
      console.error("Resend email error:", error);
      return { status: "error" };
    }

    return { status: "success" };
  } catch (error) {
    console.error("Contact form submission failed:", error);
    return { status: "error" };
  }
}
