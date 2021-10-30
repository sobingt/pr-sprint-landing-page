import React from "react";

function Contributors() {
  return (
    <div>
      <section
        id="contributors"
        className="relative z-10 py-16 border-t border-b md:py-32 border-ink-100"
      >
        <img
          src="https://assets.deepsource.io/a6b8ac2/img/forest-bg.637a4ad.svg"
          className="absolute inset-0 h-full"
        />{" "}
        <div className="relative z-10 grid max-w-6xl grid-cols-1 gap-12 px-6 mx-auto md:grid-cols-2 md:px-0">
          <div className="flex flex-col gap-12">
            <span className="text-xl font-bold tracking-wider uppercase text-juniper">
              for contributors
            </span>{" "}
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-2.5xl text-vanilla-100 leading-snug">
                Improve code quality of open-source projects you love
              </h3>{" "}
              <p className="text-lg text-vanilla-300">
                Making your first contribution can often be intimidating. Start
                with easy, but meaningful, improvements to your favorite project
                — and then dig deeper.
              </p>
            </div>{" "}
            <a
              href=""
              type="link"
              className="z-btn inline-flex items-center justify-center font-medium transition-colors duration-300 ease-in-out rounded-sm focus:outline-none whitespace-nowrap stroke-2 w-80 text-ink-400 p-0 h-10 px-4 py-2 text-base space-x-2 leading-8 bg-juniper hover:bg-juniper-600"
            >
              <svg
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
                className="z-icon stroke-current w-5 h-5 z-icon--loader text-ink-400 mr-2"
              >
                <line x1="12" y1="2" x2="12" y2="6"></line>
                <line x1="12" y1="18" x2="12" y2="22"></line>
                <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
                <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
                <line x1="2" y1="12" x2="6" y2="12"></line>
                <line x1="18" y1="12" x2="22" y2="12"></line>
                <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
                <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
              </svg>
              Find open issues on Discover
            </a>
          </div>{" "}
          <div className="flex flex-col justify-end gap-8 md:pt-20">
            <div className="flex flex-col gap-2 p-6 shadow-2xl bg-gradient-forest rounded-xl">
              <h4 className="font-semibold text-1.5xl">
                Make your first meaningful contribution
              </h4>{" "}
              <p>
                DeepSource Discover lists thousands of open-source projects that
                have code quality issues up for grabs. These issues are easy to
                pick, so you can make your first pull-request and get involved.
              </p>
            </div>
            <div className="flex flex-col gap-2 p-6 shadow-2xl bg-gradient-forest rounded-xl">
              <h4 className="font-semibold text-1.5xl">
                Learn how to write good code
              </h4>{" "}
              <p>
                Each issue flagged by DeepSource has a clear and detailed
                description explaining the issue and guidance on how to fix it.
                You'll learn something new every time you fix an issue.
              </p>
            </div>
            <div className="flex flex-col gap-2 p-6 shadow-2xl bg-gradient-forest rounded-xl">
              <h4 className="font-semibold text-1.5xl">
                Join our vibrant community
              </h4>{" "}
              <p>
                Participate in one of the events we'll host and join our Discord
                server. We are a community of developers who care about writing
                good code, and you're welcome to join us!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contributors;
