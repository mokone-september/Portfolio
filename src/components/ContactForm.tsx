"use client";

import { useActionState } from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { SendEmail } from "./SendEmail";

type ContactFormTranslations = {
  formTitle: string;
  formDescription: string;
  name: string;
  email: string;
  message: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  messagePlaceholder: string;
  submit: string;
  thankYouTitle: string;
  thankYouDescription: string;
  submitError: string;
  sending: string;
};

const defaultTranslations: ContactFormTranslations = {
  formTitle: "Send me a mail.",
  formDescription: "Fill in the form below and I'll get back to you.",
  name: "Name",
  email: "Email",
  message: "Your Message",
  namePlaceholder: "Enter your name",
  emailPlaceholder: "Enter your email",
  messagePlaceholder: "Your message here...",
  submit: "Send message",
  thankYouTitle: "Thank you for getting in touch!",
  thankYouDescription:
    "Your message has been sent successfully. I appreciate you reaching out and will get back to you as soon as possible.",
  submitError:
    "Something went wrong while sending your message. Please try again.",
  sending: "Sending...",
};

const initialState = {
  status: "idle" as const,
};

const ContactForm = ({
  translations = defaultTranslations,
}: {
  translations?: ContactFormTranslations;
}) => {
  const [state, formAction, isPending] = useActionState(
    SendEmail,
    initialState,
  );

  if (state.status === "success") {
    return (
      <Card className="w-full max-w-md">
        <CardContent className="flex flex-col items-center px-6 py-12 text-center">
          <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-400">
            <CheckCircle2 className="h-9 w-9" />
          </div>

          <h2 className="text-2xl font-bold tracking-tight">
            {translations.thankYouTitle}
          </h2>

          <p className="mt-3 max-w-sm leading-relaxed text-muted-foreground">
            {translations.thankYouDescription}
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md">
      <form action={formAction}>
        <CardHeader>
          <CardTitle className="icon_underline">
            {translations.formTitle}
          </CardTitle>

          <CardDescription>
            {translations.formDescription}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="grid gap-1.5">
            <Label htmlFor="name">{translations.name}</Label>

            <Input
              id="name"
              type="text"
              name="name"
              required
              placeholder={translations.namePlaceholder}
              disabled={isPending}
            />
          </div>

          <div className="grid gap-1.5">
            <Label htmlFor="email">{translations.email}</Label>

            <Input
              id="email"
              type="email"
              name="SenderEmail"
              required
              placeholder={translations.emailPlaceholder}
              disabled={isPending}
            />
          </div>

          <div className="grid gap-1.5">
            <Label htmlFor="message">{translations.message}</Label>

            <textarea
              id="message"
              name="message"
              required
              placeholder={translations.messagePlaceholder}
              disabled={isPending}
              className="min-h-[100px] w-full resize-none rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>

          {state.status === "error" && (
            <div
              role="alert"
              className="flex items-start gap-2 rounded-md border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive"
            >
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />

              <p>{translations.submitError}</p>
            </div>
          )}
        </CardContent>

        <CardFooter>
          <Button
            type="submit"
            className="w-full"
            disabled={isPending}
          >
            {isPending ? translations.sending : translations.submit}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default ContactForm;
