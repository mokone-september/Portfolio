import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
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
};

const defaultTranslations: ContactFormTranslations = {
  formTitle: "Send me a mail.",
  formDescription: "Once submitted, you’ll be redirected to the home page.",
  name: "Name",
  email: "Email",
  message: "Your Message",
  namePlaceholder: "Enter your name",
  emailPlaceholder: "Enter your email",
  messagePlaceholder: "Your message here...",
  submit: "Submit",
};

const ContactForm = ({
  translations = defaultTranslations,
}: {
  translations?: ContactFormTranslations;
}) => {
  return (
    <Card className="w-full max-w-md">
      <form
        action={async (formData) => {
          "use server";
          await SendEmail(formData);
        }}
      >
        <CardHeader>
          <CardTitle className="icon_underline">{translations.formTitle}</CardTitle>
          <CardDescription>
            {translations.formDescription}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Name */}
          <div className="grid gap-1.5">
            <Label htmlFor="name">{translations.name}</Label>
            <Input
              id="name"
              type="text"
              name="name"
              required
              placeholder={translations.namePlaceholder}
            />
          </div>

          {/* Email */}
          <div className="grid gap-1.5">
            <Label htmlFor="email">{translations.email}</Label>
            <Input
              id="email"
              type="email"
              name="SenderEmail"
              required
              placeholder={translations.emailPlaceholder}
            />
          </div>

          {/* Message */}
          <div className="grid gap-1.5">
            <Label htmlFor="message">{translations.message}</Label>
            <textarea
              id="message"
              name="message"
              required
              placeholder={translations.messagePlaceholder}
              className="min-h-[100px] w-full resize-none rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            ></textarea>
          </div>
        </CardContent>

        <CardFooter>
          <Button type="submit" className="w-full">
            {translations.submit}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default ContactForm;
