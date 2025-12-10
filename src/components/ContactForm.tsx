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

const ContactForm = () => {
  return (
    <Card className="w-full max-w-md">
      <form
        action={async (formData) => {
          "use server";
          await SendEmail(formData);
        }}
      >
        <CardHeader>
          <CardTitle className="icon_underline">Send me a mail.</CardTitle>
          <CardDescription>
            Once submitted, you’ll be redirected to the home page.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Name */}
          <div className="grid gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              name="name"
              required
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div className="grid gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="SenderEmail"
              required
              placeholder="Enter your email"
            />
          </div>

          {/* Message */}
          <div className="grid gap-1.5">
            <Label htmlFor="message">Your Message</Label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Your message here..."
              className="min-h-[100px] w-full resize-none rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            ></textarea>
          </div>
        </CardContent>

        <CardFooter>
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default ContactForm;
