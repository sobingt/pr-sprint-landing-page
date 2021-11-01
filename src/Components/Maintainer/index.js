import React from "react";

function Maintainer() {
  return (
    <div>
      <section id="maintainers" className="relative z-10 py-16 md:py-32">
        <img
          src="https://assets.deepsource.io/a6b8ac2/img/dawn-bg.4b55bfa.svg"
          className="absolute inset-0 h-full"
        />{" "}
        <div className="relative z-10 grid max-w-6xl grid-cols-1 gap-12 px-6 mx-auto md:grid-cols-2 md:px-0">
          <div className="flex flex-col gap-12">
            <span className="text-xl font-bold tracking-wider uppercase text-juniper">
              for maintainers
            </span>{" "}
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-2.5xl text-vanilla-100 leading-snug">
                Enable making the first contribution to your project easier
              </h3>{" "}
              <p className="text-lg text-vanilla-300">
                Get new contributors to fix code quality issues in your
                open-source project. Escape the spam.
              </p>
            </div>{" "}
            <a
              href="#"
              type="link"
              className="z-btn inline-flex items-center justify-center font-medium transition-colors duration-300 ease-in-out rounded-sm focus:outline-none whitespace-nowrap stroke-2 w-80 bg-robin hover:bg-robin-600 text-vanilla-100 z-btn--vanilla-100 p-0 h-10 px-4 py-2 text-base space-x-2 leading-8 bg-juniper hover:bg-juniper-600"
            >
              <svg
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
                className="z-icon stroke-current w-5 h-5 z-icon--globe text-vanilla-100 mr-2"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              List your project on Discover
            </a>
          </div>{" "}
          <div className="flex flex-col justify-end gap-8 md:pt-20">
            <div className="flex flex-col gap-2 p-6 shadow-2xl bg-gradient-dawn rounded-xl">
              <h4 className="text-vanilla-100 font-semibold text-1.5xl">
                Attract high-quality first contributions
              </h4>{" "}
              <p className="text-vanilla-200">
                DeepSource Discover helps you list easy-to-fix but valuable code
                quality issues for new contributors. For most developers, their
                first pull-request is the hardest. Lower the barrier for your
                project.
              </p>
            </div>
            <div className="flex flex-col gap-2 p-6 shadow-2xl bg-gradient-dawn rounded-xl">
              <h4 className="text-vanilla-100 font-semibold text-1.5xl">
                Improve your code's quality
              </h4>{" "}
              <p className="text-vanilla-200">
                A clean code codebase attracts more meaningful contributions,
                but maintainers rarely have the time to clean up existing
                issues. Offload these low-hanging fruits to new contributors.
              </p>
            </div>
            <div className="flex flex-col gap-2 p-6 shadow-2xl bg-gradient-dawn rounded-xl">
              <h4 className="text-vanilla-100 font-semibold text-1.5xl">
                No false positives
              </h4>{" "}
              <p className="text-vanilla-200">
                All code quality issues raised by DeepSource Discover are
                hand-picked by our Language Engineering team. We guarantee no
                false positives, so you don't have to deal with any noise.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Maintainer;
