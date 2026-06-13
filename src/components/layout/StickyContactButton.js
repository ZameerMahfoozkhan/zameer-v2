"use client";
import { useState } from "react";
import { siteConfig } from "@/data/content";

export default function StickyContactButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", service: "", message: "" });

  const services = ["Web Development", "Website Design", "SEO Optimization", "Other"];

  const handleNext = () => {
    if (step === 0 && !formData.name.trim()) return;
    if (step === 1 && !formData.email.trim()) return;
    setStep(step + 1);
  };

  const handleServiceSelect = (service) => {
    setFormData({ ...formData, service });
    setStep(step + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.message.trim()) return;
    
    setIsSubmitting(true);
    try {
      const response = await fetch(`https://formspree.io/f/${siteConfig.formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          service: formData.service,
          message: formData.message,
          _subject: `New Lead from Chatbot: ${formData.name} - ${formData.service}`
        })
      });

      if (response.ok) {
        setStep(4);
      } else {
        alert("Oops! There was a problem sending your message.");
      }
    } catch (error) {
      alert("Oops! There was a problem sending your message.");
    }
    setIsSubmitting(false);
  };

  return (
    <>
      <button 
        className="sticky-contact" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Chat with Bot" 
        title="Get in Touch"
        style={{ cursor: "pointer" }}
      >
        {isOpen ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="chat-bot-window" style={{
          position: "fixed",
          bottom: "100px",
          right: "28px",
          width: "320px",
          background: "var(--bg)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
          zIndex: 999,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          animation: "fadeInUp 0.3s ease"
        }}>
          <div style={{
            background: "linear-gradient(135deg, var(--orange), #E87000)",
            padding: "16px",
            color: "#000",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: "10px"
          }}>
            <span style={{ fontSize: "1.2rem" }}>🤖</span>
            <span>Zameer's Assistant</span>
          </div>
          
          <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "16px", minHeight: "250px" }}>
            {step === 0 && (
              <div style={{ animation: "fadeIn 0.3s both" }}>
                <div style={{ background: "rgba(255,255,255,0.05)", padding: "12px", borderRadius: "12px", borderTopLeftRadius: 0, marginBottom: "16px" }}>
                  <p style={{ color: "var(--text)", fontSize: "0.9rem", margin: 0 }}>Hi there! 👋 I'm Zameer's virtual assistant. What's your name?</p>
                </div>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Type your name..."
                  onKeyDown={(e) => e.key === 'Enter' && handleNext()}
                  style={{
                    width: "100%", padding: "12px", borderRadius: "8px", 
                    background: "rgba(255,255,255,0.05)", border: "1px solid var(--border)", 
                    color: "var(--text)", outline: "none", marginBottom: "12px", fontFamily: "inherit"
                  }}
                  autoFocus
                />
                <button onClick={handleNext} className="btn-primary" style={{ padding: "8px 16px", fontSize: "0.85rem", width: "100%", justifyContent: "center" }}>Next</button>
              </div>
            )}

            {step === 1 && (
              <div style={{ animation: "fadeIn 0.3s both" }}>
                <div style={{ background: "rgba(255,255,255,0.05)", padding: "12px", borderRadius: "12px", borderTopLeftRadius: 0, marginBottom: "16px" }}>
                  <p style={{ color: "var(--text)", fontSize: "0.9rem", margin: 0 }}>Nice to meet you, {formData.name}! What's your email address?</p>
                </div>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="Type your email..."
                  onKeyDown={(e) => e.key === 'Enter' && handleNext()}
                  style={{
                    width: "100%", padding: "12px", borderRadius: "8px", 
                    background: "rgba(255,255,255,0.05)", border: "1px solid var(--border)", 
                    color: "var(--text)", outline: "none", marginBottom: "12px", fontFamily: "inherit"
                  }}
                  autoFocus
                />
                <div style={{ display: "flex", gap: "8px" }}>
                  <button onClick={() => setStep(0)} className="btn-secondary" style={{ padding: "8px 16px", fontSize: "0.85rem", flex: 1, justifyContent: "center" }}>Back</button>
                  <button onClick={handleNext} className="btn-primary" style={{ padding: "8px 16px", fontSize: "0.85rem", flex: 1, justifyContent: "center" }}>Next</button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div style={{ animation: "fadeIn 0.3s both" }}>
                <div style={{ background: "rgba(255,255,255,0.05)", padding: "12px", borderRadius: "12px", borderTopLeftRadius: 0, marginBottom: "16px" }}>
                  <p style={{ color: "var(--text)", fontSize: "0.9rem", margin: 0 }}>Got it! Which service are you interested in?</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "12px" }}>
                  {services.map((service, i) => (
                    <button 
                      key={i}
                      onClick={() => handleServiceSelect(service)}
                      className="btn-secondary"
                      style={{ 
                        padding: "8px 16px", fontSize: "0.85rem", width: "100%", justifyContent: "flex-start", 
                        border: formData.service === service ? "1.5px solid var(--orange)" : "1.5px solid var(--border)",
                        color: formData.service === service ? "var(--orange)" : "var(--text)"
                      }}
                    >
                      {service}
                    </button>
                  ))}
                </div>
                <button onClick={() => setStep(1)} className="btn-secondary" style={{ padding: "8px 16px", fontSize: "0.85rem", width: "100%", justifyContent: "center" }}>Back</button>
              </div>
            )}

            {step === 3 && (
              <div style={{ animation: "fadeIn 0.3s both" }}>
                <div style={{ background: "rgba(255,255,255,0.05)", padding: "12px", borderRadius: "12px", borderTopLeftRadius: 0, marginBottom: "16px" }}>
                  <p style={{ color: "var(--text)", fontSize: "0.9rem", margin: 0 }}>Great choice! Please describe your project or requirements briefly.</p>
                </div>
                <textarea 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Type your message..."
                  rows={3}
                  style={{
                    width: "100%", padding: "12px", borderRadius: "8px", 
                    background: "rgba(255,255,255,0.05)", border: "1px solid var(--border)", 
                    color: "var(--text)", outline: "none", marginBottom: "12px", resize: "none", fontFamily: "inherit"
                  }}
                  autoFocus
                />
                <div style={{ display: "flex", gap: "8px" }}>
                  <button onClick={() => setStep(2)} className="btn-secondary" style={{ padding: "8px 16px", fontSize: "0.85rem", flex: 1, justifyContent: "center" }} disabled={isSubmitting}>Back</button>
                  <button onClick={handleSubmit} className="btn-primary" style={{ padding: "8px 16px", fontSize: "0.85rem", flex: 1, justifyContent: "center" }} disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send"}
                  </button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div style={{ animation: "fadeIn 0.3s both", textAlign: "center", padding: "20px 0" }}>
                <div style={{ fontSize: "3rem", marginBottom: "16px", animation: "avatarEntrance 0.6s ease" }}>✨</div>
                <h4 style={{ color: "var(--orange)", marginBottom: "8px", fontSize: "1.2rem" }}>Message Sent!</h4>
                <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.5 }}>Thanks for reaching out, {formData.name}. Zameer will get back to you soon.</p>
                <button onClick={() => {setIsOpen(false); setTimeout(() => {setStep(0); setFormData({name: "", email: "", service: "", message: ""})}, 300);}} className="btn-secondary" style={{ padding: "8px 16px", fontSize: "0.85rem", marginTop: "24px" }}>Close Chat</button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
