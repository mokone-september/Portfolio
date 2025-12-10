import { Resend } from "resend";
import { redirect } from "next/navigation";

// EMAIL FUNCTIONALITY
// Ensure RESEND_API_KEY is set in .env.local
const resend = new Resend(process.env.RESEND_API_KEY);

export const SendEmail = async (formdata: FormData) => {
  const message = formdata.get("message")?.toString();
  const name = formdata.get("name")?.toString();
  const SenderEmail = formdata.get("SenderEmail")?.toString();

  if (!message || !name || !SenderEmail) {
    return { error: "Missing required fields" };
  }

  await resend.emails.send({
    from: "Contact Form <onboarding@resend.dev>",
    to: "mokoneseptember@gmail.com",
    subject: `${name} From Contact Form.`,
    reply_to: SenderEmail,
    text: `sender email: ${SenderEmail}\n\n${message}`,
  });

  return redirect("/");
};
