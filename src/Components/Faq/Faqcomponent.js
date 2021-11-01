import React, { useState } from "react";

function Faqcomponent({ question, answer }) {
  const [answerShow, answerShowState] = useState(false);
  return (
    <div>
      <div className="z-accordion-item py-4 text-vanilla-200">
        <div className="flex items-center transition-all duration-700 ease-in-out group cursor-pointer">
          <span className="flex-1 font-medium">{question}</span>
          <svg
            onClick={() => {
              answerShowState(!answerShow);
            }}
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            className={`transform transition-all duration-DEFAULT ease-in-out group stroke-1.5 z-icon stroke-current w-6 h-6 z-icon--chevron-right text-slate  group-hover:text-vanilla-200 ${
              answerShow ? "rotate-90" : ""
            }`}
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
        <div
          style={{ display: answerShow ? "inline-block" : "none" }}
          className="overflow-hidden transition-max-height duration-300 ease-in-out text-sm leading-6 max-h-52"
        >
          {" "}
          <article className="prose max-w-full">
            <div className="nuxt-content">
              <p>{answer}</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Faqcomponent;
