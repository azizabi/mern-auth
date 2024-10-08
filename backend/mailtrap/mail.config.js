import { MailtrapClient } from "mailtrap";
import dotenv from 'dotenv';
dotenv.config();

console.log("mailtrap env ",process.env.MAILTRAP_TOKEN);

export const mailtrapClient = new MailtrapClient({
  token: process.env.MAILTRAP_TOKEN,
});

export const sender = {
  email: "hello@demomailtrap.com",
  name: "Authenticate for your confirmation",
};
