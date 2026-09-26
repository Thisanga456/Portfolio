"use client";

import { useState } from "react";
import { personal } from "@/data/personal";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const emailDisplay = personal.email || "[EMAIL TO BE ADDED]";
  const githubDisplay = personal.socialLinks.github;
  const linkedinDisplay = personal.socialLinks.linkedin;

  const handleCopyEmail = () => {
    if (personal.email) {
      navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } else {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-header">
        <p className="eyebrow">[ 07 / CONTACT ]</p>
      </div>

      <div className="contact-main">
        <h2 id="contact-title" className="contact-heading">
          HAVE AN IDEA?
          <br />
          <span>LET&apos;S BUILD SOMETHING USEFUL.</span>
        </h2>

        <div className="contact-actions">
          {/* Email row with copy action */}
          <div className="contact-email-box">
            <span className="contact-label">DIRECT EMAIL</span>
            <div className="contact-email-row">
              <span className="contact-email-text">{emailDisplay}</span>
              <button
                type="button"
                className="contact-copy-btn"
                onClick={handleCopyEmail}
                aria-label={personal.email ? "Copy email address" : "Email placeholder"}
              >
                {copied
                  ? personal.email
                    ? "COPIED TO CLIPBOARD"
                    : "EMAIL NOT YET SET"
                  : personal.email
                  ? "COPY EMAIL"
                  : "EMAIL PLACEHOLDER"}
              </button>
            </div>
          </div>

          {/* Social links */}
          <div className="contact-socials">
            <span className="contact-label">CONNECT</span>
            <ul className="contact-social-list" aria-label="Social media profiles">
              <li>
                {githubDisplay ? (
                  <a
                    href={githubDisplay}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <span>GITHUB</span>
                    <b aria-hidden="true">↗</b>
                  </a>
                ) : (
                  <span className="social-link social-link--placeholder">
                    <span>GITHUB</span>
                    <em>[LINK TO BE ADDED]</em>
                  </span>
                )}
              </li>
              <li>
                {linkedinDisplay ? (
                  <a
                    href={linkedinDisplay}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <span>LINKEDIN</span>
                    <b aria-hidden="true">↗</b>
                  </a>
                ) : (
                  <span className="social-link social-link--placeholder">
                    <span>LINKEDIN</span>
                    <em>[LINK TO BE ADDED]</em>
                  </span>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

