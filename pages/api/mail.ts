import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

import { transporter } from "@/lib/transporter";

sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const {
      name,
      email,
      message,
    }: { name: string; email: string; message: string } = req.body;

    const mailOptions = {
      from: email,
      to: "joseph.ketterer@gmail.com",
      subject: `${name.toUpperCase()} sent you a message from Portfolio`,
      text: message,
    };
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent:", info);

      return res.json({ message: "Email successfully sent" });
    } catch (err) {
      console.error(err);
      return res.json({ message: "Email failed to send" });
    }
  }
}
