import type { NextApiRequest, NextApiResponse } from "next";


import { transporter } from "@/lib/transporter";



type Data = {
  message: string;
};

// https://stackoverflow.com/questions/65631481/nodemailer-in-vercel-not-sending-email-in-production

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
    await new Promise((resolve, reject) => {
      // verify connection configuration
      transporter.verify(function (error: Error, success: any) {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          console.log("Server is ready to take our messages");
          resolve(success);
        }
      });
    });
    try {
      await new Promise((resolve, reject) => {
        // send mail
        transporter.sendMail(mailOptions, (err: Error, info: any) => {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            console.log(info);
            resolve(info);
          }
        });
      });

      return res.json({ message: "Email successfully sent" });
    } catch (err) {
      console.error(err);
      return res.json({ message: "Email failed to send" });
    }
  }
}
