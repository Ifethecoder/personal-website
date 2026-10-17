"use client";

import { useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="email-copy">
      <p className="contact-note">Email opens your default mail app. You can also copy the address.</p>
      <button type="button" onClick={copyEmail}>Copy email address</button>
      <p className="email-copy-status" role="status">
        {status === "copied" ? "Email address copied." : status === "error" ? "Copy is unavailable. Select the address below to copy it manually." : ""}
      </p>
      {status === "error" && (
        <input
          type="text"
          readOnly
          value={email}
          aria-label="Email address to copy manually"
          onFocus={(event) => event.currentTarget.select()}
        />
      )}
    </div>
  );
}
