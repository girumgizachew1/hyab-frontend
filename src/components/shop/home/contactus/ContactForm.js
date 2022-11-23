import React, { useEffect, useState } from "react";
import { sendEmail } from "./Action";
import { useRef } from "react";

export default function ContactForm(params) {
  const refForm = useRef();
  return (
    <div>
      <form ref={refForm} onSubmit={() => sendEmail(refForm)}>
        <input type="text" name="name" placeholder="Nmae" required />
        <input type="email" name="email" placeholder="Email" required />
        <input placeholder="Subject" name="subject" type="text" />
        <textarea placeholder="Message" name="message" required></textarea>

        <input type="submit" value="Send" />
      </form>
    </div>
  );
}
