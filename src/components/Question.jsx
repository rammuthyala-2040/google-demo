import React, { useState } from "react";
import "./Question.css";

const Question = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqList = [
    {
      question: "How do I make Chrome my default web browser?",
      answer: "Go to your system settings and select Chrome as the default browser.",
    },
    {
      question: "How can I customise Chrome?",
      answer: "You can customise Chrome by adding themes, extensions, and modifying settings in the Chrome menu.",
    },
    {
      question: "What are Chrome's safety settings?",
      answer: "Chrome offers safe browsing, password checks, and site permissions in the settings menu.",
    },
    {
      question: "What is Chrome’s password manager?",
      answer: "Chrome's password manager securely saves and autofills your passwords for websites.",
    },
    {
      question: "How do I add a browser extension to Chrome?",
      answer: "Go to the Chrome Web Store, search for the extension, and click 'Add to Chrome'.",
    },
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
    <div className="faq-container">
      <h1>Frequently asked questions</h1>
      {faqList.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleAnswer(index)}>
            {faq.question}
            <span className="faq-toggle">{openIndex === index ? "-" : "+"}</span>
          </div>
          {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
    <div className="download-container">
      <div className="content">
        <h1>Take your browser with you</h1>
        <p>
          Download Chrome on your mobile device or tablet and sign into your
          account for the same browser experience, everywhere.
        </p>
        <button className="download-button">
          <span className="icon">⬇</span> Download Chrome
        </button>
      </div>
      <div className="qr-section">
        <div className="qr-code">
          <img
            src="https://www.google.com/chrome/static/images/go-mobile-qrs/qr-take-it-with-you.webp" // Replace with your QR code image URL
            alt="QR Code"
          />
          <p>Get Chrome for your phone</p>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Question;
