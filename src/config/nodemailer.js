import nodemailer from "nodemailer";
import { NODEMAILER_PASS, NODEMAILER_USER } from "./env.js";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: NODEMAILER_USER,
    pass: NODEMAILER_PASS,
  },
});

export default transporter;
