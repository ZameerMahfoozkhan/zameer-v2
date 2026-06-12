"use client";
import { useState } from "react";

export default function FAQ({ faqs, id = "faq" }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="section" id={id}>
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">FAQ</span>
          <h2 className="section-title">Frequently Asked <span className="accent">Questions</span></h2>
          <p className="section-subtitle">Quick answers to questions you might have.</p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item ${openIndex === i ? "open" : ""}`}>
              <button
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span>{faq.q}</span>
                <svg className="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-inner">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
