"use client";

import { useState } from "react";
import { personal } from "@/data/personal";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const emailAddress = personal.email || "thissenithu1@gmail.com";
  const githubUrl = personal.socialLinks.github;
  const linkedinUrl = personal.socialLinks.linkedin;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="section-container">
        <div className="contact-header">
          <p className="section-label">GET IN TOUCH</p>
          <h2 id="contact-title" className="contact-title">
            Have a project, opportunity, or just want to connect?
          </h2>
          <p className="contact-intro">
            I&apos;m currently open to software development internships, junior roles, and interesting project collaborations. Feel free to reach out directly.
          </p>
        </div>

        <div className="contact-grid">
          {/* Email card */}
          <div className="contact-card contact-card--primary">
            <span className="contact-card-label">DIRECT EMAIL</span>
            <div className="contact-email-val">{emailAddress}</div>
            <div className="contact-card-actions">
              <button
                type="button"
                className="btn btn--primary"
                onClick={handleCopyEmail}
                aria-label="Copy email address to clipboard"
              >
                <span>{copied ? "Copied to Clipboard!" : "Copy Email"}</span>
                <b aria-hidden="true">{copied ? "✓" : "📋"}</b>
              </button>
              <a
                href={`mailto:${emailAddress}`}
                className="btn btn--outline"
                aria-label={`Send email to ${emailAddress}`}
              >
                <span>Send Email</span>
                <b aria-hidden="true">↗</b>
              </a>
            </div>
          </div>

          {/* Social cards */}
          <div className="contact-social-cards">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card"
                aria-label="Visit GitHub profile"
              >
                <div className="social-card-info">
                  <strong className="social-name">GitHub</strong>
                  <span className="social-handle">@Thisanga456</span>
                </div>
                <span className="social-card-cta">
                  <span>View Profile</span>
                  <b aria-hidden="true">↗</b>
                </span>
              </a>
            )}

            {linkedinUrl && (
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card"
                aria-label="Visit LinkedIn profile"
              >
                <div className="social-card-info">
                  <strong className="social-name">LinkedIn</strong>
                  <span className="social-handle">Thisanga Senithu</span>
                </div>
                <span className="social-card-cta">
                  <span>Connect</span>
                  <b aria-hidden="true">↗</b>
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
