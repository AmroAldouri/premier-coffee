"use client";

import { useState } from "react";
import { email } from "../lib/site";

const empty = {
  name: "",
  company: "",
  phone: "",
  email: "",
  area: "Greater Toronto Area",
  message: "",
};

export default function ContactForm() {
  const [values, setValues] = useState(empty);
  const [error, setError] = useState("");
  const [ready, setReady] = useState("");
  const [copied, setCopied] = useState(false);

  function update(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  }

  function compose(data) {
    return [
      `Name: ${data.name}`,
      `Company: ${data.company || "Not provided"}`,
      `Phone: ${data.phone || "Not provided"}`,
      `Email: ${data.email}`,
      `Area: ${data.area}`,
      "",
      data.message,
    ].join("\n");
  }

  function onSubmit(event) {
    event.preventDefault();
    setCopied(false);

    if (!values.name.trim()) {
      setError("Please add your name.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      setError("Please add a valid email address.");
      return;
    }
    if (values.message.trim().length < 8) {
      setError("Please tell us a little about what you need.");
      return;
    }

    const body = compose({
      name: values.name.trim(),
      company: values.company.trim(),
      phone: values.phone.trim(),
      email: values.email.trim(),
      area: values.area,
      message: values.message.trim(),
    });
    const subject = `Website enquiry from ${values.name.trim()}`;
    setError("");
    setReady(body);
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(`To: ${email}\n\n${ready}`);
      setCopied(true);
    } catch {
      setCopied(false);
      setError("Copy was blocked by the browser. Select the message and copy it yourself.");
    }
  }

  if (ready) {
    return (
      <div className="form-success">
        <h2>Your message is ready</h2>
        <p>
          Your email program should open with this note addressed to {email}. If nothing opens, copy the message and send it yourself.
        </p>
        <pre>{ready}</pre>
        <div className="cluster">
          <button className="btn btn-solid" type="button" onClick={copyMessage}>
            {copied ? "Copied" : "Copy message"}
          </button>
          <button className="btn btn-ghost" type="button" onClick={() => setReady("")}>
            Edit message
          </button>
        </div>
        {error ? <p className="form-error">{error}</p> : null}
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="form-grid">
        <label>
          Name
          <input name="name" autoComplete="name" value={values.name} onChange={update} required />
        </label>
        <label>
          Company
          <input name="company" autoComplete="organization" value={values.company} onChange={update} />
        </label>
        <label>
          Phone
          <input name="phone" autoComplete="tel" inputMode="tel" value={values.phone} onChange={update} />
        </label>
        <label>
          Email
          <input name="email" type="email" autoComplete="email" value={values.email} onChange={update} required />
        </label>
        <label className="span-2">
          Area
          <select name="area" value={values.area} onChange={update}>
            <option>Greater Toronto Area</option>
            <option>Simcoe County</option>
            <option>Both areas</option>
          </select>
        </label>
        <label className="span-2">
          How can we help?
          <textarea name="message" value={values.message} onChange={update} required />
        </label>
      </div>
      {error ? <p className="form-error" role="alert">{error}</p> : null}
      <button className="btn btn-solid" type="submit">
        Continue in your email
      </button>
    </form>
  );
}
