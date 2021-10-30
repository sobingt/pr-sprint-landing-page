import React from "react";

function Faq() {
  return (
    <div>
      <section className="w-full bg-ink-300 relative z-10">
        <div className="flex flex-col max-w-6xl mx-auto justify-between py-16 px-4 space-y-4 md:space-y-8">
          <div className="w-full mx-auto my-auto">
            <h1 className="font-bold text-2xl sm:text-3xl text-vanilla-100 text-center mx-auto">
              Frequently Asked Questions
            </h1>
          </div>{" "}
          <div className="w-full">
            <div className="text-vanilla-100 text-xl divide-y divide-ink-100">
              <div className="z-accordion-item py-4 text-vanilla-200">
                <div className="flex items-center transition-all duration-700 ease-in-out group cursor-pointer">
                  <span className="flex-1 font-medium">
                    I'm new to open-source, where do I start?
                  </span>
                  <svg
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                    className="transform transition-all duration-DEFAULT ease-in-out group stroke-1.5 z-icon stroke-current w-6 h-6 z-icon--chevron-right text-slate text-vanilla-200 rotate-90 group-hover:text-vanilla-200"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </div>
                <div className="overflow-hidden transition-max-height duration-300 ease-in-out text-sm leading-6 max-h-52">
                  {" "}
                  <article className="prose max-w-full">
                    <div className="nuxt-content">
                      <p>
                        Head to{" "}
                        <a href="" rel="nofollow noopener noreferrer">
                          DeepSource Discover
                        </a>
                        , find an issue you would like to fix and send a pull
                        request. If you've any questions, ping us at{" "}
                        <code>#hacktoberfest</code> channel in{" "}
                        <a
                          href="https://deepsource.io/discord"
                          rel="nofollow noopener noreferrer"
                          target="_blank"
                        >
                          Discord
                        </a>
                        .
                      </p>
                    </div>
                  </article>
                </div>
              </div>
              <div className="z-accordion-item py-4 text-vanilla-200">
                <div className="flex items-center transition-all duration-700 ease-in-out group cursor-pointer">
                  <span className="flex-1 font-medium">
                    Does DeepSource provide any special swag?
                  </span>
                  <svg
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                    className="transform transition-all duration-DEFAULT ease-in-out group stroke-1.5 z-icon stroke-current w-6 h-6 z-icon--chevron-right text-slate group-hover:text-vanilla-200"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </div>
                <div className="overflow-hidden transition-max-height duration-300 ease-in-out text-sm leading-6 max-h-0">
                  <article className="prose max-w-full">
                    <div className="nuxt-content">
                      <p>
                        DigitalOcean will send DeepSource swag to all
                        participants who create at least 4 pull requests during
                        Hacktoberfest. Apart from this, if you're a maintainer
                        participating in Hacktoberfest with DeepSource Discover
                        with at least 20 contributors, we'll send special swag
                        to you. Expect an e-mail from us in the second week of
                        November '21.
                      </p>
                    </div>
                  </article>
                </div>
              </div>
              <div className="z-accordion-item py-4 text-vanilla-200">
                <div className="flex items-center transition-all duration-700 ease-in-out group cursor-pointer">
                  <span className="flex-1 font-medium">
                    I've a question about Hacktoberfest.
                  </span>
                  <svg
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                    className="transform transition-all duration-DEFAULT ease-in-out group stroke-1.5 z-icon stroke-current w-6 h-6 z-icon--chevron-right text-slate group-hover:text-vanilla-200"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </div>
                <div className="overflow-hidden transition-max-height duration-300 ease-in-out text-sm leading-6 max-h-0">
                  <article className="prose max-w-full">
                    <div className="nuxt-content">
                      <p>
                        You can find more information about Hacktoberfest at{" "}
                        <a
                          href=""
                          rel="nofollow noopener noreferrer"
                          target="_blank"
                        >
                          hacktoberfest.digitalocean.com
                        </a>
                        . If you've a question, please ask the same at{" "}
                        <a
                          href=""
                          rel="nofollow noopener noreferrer"
                          target="_blank"
                        >
                          Hacktoberfest Discord server
                        </a>
                        .
                      </p>
                    </div>
                  </article>
                </div>
              </div>
              <div className="z-accordion-item py-4 text-vanilla-200">
                <div className="flex items-center transition-all duration-700 ease-in-out group cursor-pointer">
                  <span className="flex-1 font-medium">
                    I have a support query about DeepSource.
                  </span>
                  <svg
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                    className="transform transition-all duration-DEFAULT ease-in-out group stroke-1.5 z-icon stroke-current w-6 h-6 z-icon--chevron-right text-slate group-hover:text-vanilla-200"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </div>
                <div className="overflow-hidden transition-max-height duration-300 ease-in-out text-sm leading-6 max-h-0">
                  <article className="prose max-w-full">
                    <div className="nuxt-content">
                      <p>
                        Please ping us at{" "}
                        <a
                          href=""
                          rel="nofollow noopener noreferrer"
                          target="_blank"
                        >
                          deepsource.io/support
                        </a>{" "}
                        and we'll get back to you.
                      </p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-12 px-6 py-16 border-t md:py-32 bg-gradient-skeleton border-ink-100">
        <h3 className="font-bold text-2.5xl leading-tight text-center max-w-3xl mx-auto text-vanilla-100">
          Still got questions? We’re here to help!
        </h3>{" "}
        <a
          href=""
          type="link"
          className="z-btn inline-flex items-center justify-center font-medium transition-colors duration-300 ease-in-out rounded-sm focus:outline-none whitespace-nowrap mx-auto stroke-2 bg-ink-50 hover:bg-ink-100 text-vanilla-100 z-btn--vanilla-100 p-0 h-10 px-4 py-2 text-base space-x-2 leading-8 bg-juniper hover:bg-juniper-600"
        >
          <svg
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            className="z-icon stroke-current w-5 h-5 z-icon--message-square text-vanilla-100 mr-2"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          Join our Discord server
        </a>
      </section>
    </div>
  );
}

export default Faq;
