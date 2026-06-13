"use client";
import { useState } from "react";
import { siteConfig } from "@/data/content";

export default function ContactForm({ showBudget = false }) {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch(`https://formspree.io/f/${siteConfig.formspreeId}`, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="contact-form" style={{ textAlign: "center", padding: "60px 20px" }}>
        <div style={{ fontSize: "3rem", marginBottom: "16px", animation: "avatarEntrance 0.6s ease" }}>✨</div>
        <h3 style={{ fontSize: "1.5rem", color: "var(--orange)", marginBottom: "12px" }}>Message Sent!</h3>
        <p style={{ color: "var(--text-muted)", marginBottom: "24px" }}>Thank you for reaching out. I will get back to you within 24 hours.</p>
        <button onClick={() => setStatus("idle")} className="btn-secondary">Send Another Message</button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="you@example.com" required />
        </div>
      </div>
      
      {showBudget ? (
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="service">Service Needed</label>
            <select id="service" name="service">
              <option value="">Select a service...</option>
              <option value="Web Development">Web Development</option>
              <option value="Website Redesign">Website Redesign</option>
              <option value="E-commerce">E-commerce Development</option>
              <option value="SEO Optimization">SEO Optimization</option>
              <option value="Landing Page">Landing Page</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="budget">Budget Range</label>
            <select id="budget" name="budget">
              <option value="">Select budget...</option>
              <option value="Under ₹10,000">Under ₹10,000</option>
              <option value="₹10,000 - ₹25,000">₹10,000 - ₹25,000</option>
              <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
              <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
              <option value="₹1,00,000+">₹1,00,000+</option>
            </select>
          </div>
        </div>
      ) : (
        <div className="form-group">
          <label htmlFor="service">Service Needed</label>
          <select id="service" name="service">
            <option value="">Select a service...</option>
            <option value="Web Development">Web Development</option>
            <option value="Website Redesign">Website Redesign</option>
            <option value="E-commerce">E-commerce Development</option>
            <option value="SEO Optimization">SEO Optimization</option>
            <option value="Landing Page">Landing Page Development</option>
            <option value="Other">Other</option>
          </select>
        </div>
      )}

      <div className="form-group">
        <label htmlFor="message">Project Details</label>
        <textarea id="message" name="message" rows={showBudget ? "6" : "5"} placeholder={showBudget ? "Tell me about your project, goals, timeline, and any specific requirements..." : "Tell me about your project, timeline, and budget..."} required></textarea>
      </div>

      {status === "error" && (
        <div style={{ color: "#FF5F57", fontSize: "0.9rem", marginBottom: "16px" }}>
          Oops! There was a problem submitting your form. Please try again.
        </div>
      )}

      <button type="submit" className="btn-submit" disabled={status === "submitting"}>
        <span>{status === "submitting" ? "Sending..." : "Send Message"}</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
      </button>
    </form>
  );
}
