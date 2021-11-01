import React from "react";

function EventSchedule() {
  return (
    <div>
      <section id="events" className="relative z-10 border-t border-ink-300">
        <img
          src="\assets\img\herobg.svg"
          className="absolute inset-0 w-full transform rotate-180"
        />{" "}
        <div className="relative z-10 flex flex-col w-full max-w-6xl py-16 mx-auto md:py-32 gap-y-6">
          <h3 className="px-6 text-xl font-bold tracking-wider uppercase text-juniper md:px-0">
            event schedule
          </h3>{" "}
          <div className="flex flex-col-reverse justify-between gap-8 md:flex-row">
            <div className="p-6 md:px-0 md:w-1/2">
              <div className="timeline flex flex-col gap-y-2">
                <div className="cursor-pointer">
                  <div className="timeline__item flex relative gap-x-2 h-32">
                    <div className="flex flex-col justify-center items-center gap-y-2">
                      <div className="w-6 h-6 flex justify-center items-center">
                        <div className="p-1 rounded-full bg-robin">
                          <svg
                            viewBox="0 0 24 24"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            fill="none"
                            className="stroke-2 z-icon stroke-current w-4 h-4 z-icon--check text-vanilla-400"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>{" "}
                        </div>
                      </div>
                      <span className="h-full border-l border-2 rounded-sm left-4 border-ink-100"></span>
                    </div>{" "}
                    <div className="flex flex-col -mt-1 gap-y-px">
                      <span className="uppercase text-vanilla-400">
                        Monday, October 4
                      </span>{" "}
                      <span className="font-medium text-vanilla-100">
                        [VIRTUAL] Hacktoberfest Kickoff
                      </span>
                    </div>
                  </div>
                </div>
                <div className="cursor-pointer">
                  <div className="timeline__item flex relative gap-x-2 h-32">
                    <div className="flex flex-col justify-center items-center gap-y-2">
                      <div className="w-6 h-6 flex justify-center items-center">
                        <div className="p-1 rounded-full bg-robin">
                          <svg
                            viewBox="0 0 24 24"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            fill="none"
                            className="stroke-2 z-icon stroke-current w-4 h-4 z-icon--check text-vanilla-400"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                      </div>
                      <span className="h-full border-l border-2 rounded-sm left-4 border-ink-100"></span>
                    </div>{" "}
                    <div className="flex flex-col -mt-1 gap-y-px">
                      <span className="uppercase text-vanilla-400">
                        Friday, October 8
                      </span>{" "}
                      <span className="font-medium text-vanilla-100">
                        [San Francisco &amp; Bengaluru] Hacktoberfest
                        after-party #1
                      </span>
                    </div>
                  </div>
                </div>
                <div className="cursor-pointer">
                  <div className="timeline__item flex relative gap-x-2 h-32">
                    <div className="flex flex-col justify-center items-center gap-y-2">
                      <div className="w-6 h-6 flex justify-center items-center">
                        <div className="p-1 rounded-full bg-robin">
                          <svg
                            viewBox="0 0 24 24"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            fill="none"
                            className="stroke-2 z-icon stroke-current w-4 h-4 z-icon--check text-vanilla-400"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                      </div>
                      <span className="h-full border-l border-2 rounded-sm left-4 border-ink-100"></span>
                    </div>{" "}
                    <div className="flex flex-col -mt-1 gap-y-px">
                      <span className="uppercase text-vanilla-400">
                        Thursday, October 14
                      </span>{" "}
                      <span className="font-medium text-vanilla-100">
                        [VIRTUAL] Contribute to open-source, live with
                        DeepSource
                      </span>
                    </div>
                  </div>
                </div>
                <div className="cursor-pointer">
                  <div className="timeline__item flex relative gap-x-2 h-32">
                    <div className="flex flex-col justify-center items-center gap-y-2">
                      <div className="w-6 h-6 flex justify-center items-center">
                        <div className="p-1 rounded-full bg-robin">
                          <svg
                            viewBox="0 0 24 24"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            fill="none"
                            className="stroke-2 z-icon stroke-current w-4 h-4 z-icon--check text-vanilla-400"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                      </div>
                      <span className="h-full border-l border-2 rounded-sm left-4 border-ink-100"></span>
                    </div>{" "}
                    <div className="flex flex-col -mt-1 gap-y-px">
                      <span className="uppercase text-vanilla-400">
                        Friday, October 22
                      </span>{" "}
                      <span className="font-medium text-vanilla-100">
                        [San Francisco &amp; Bengaluru] Hacktoberfest
                        after-party #2
                      </span>
                    </div>
                  </div>
                </div>
                <div className="cursor-pointer">
                  <div className="timeline__item flex relative gap-x-2 h-32">
                    <div className="flex flex-col justify-center items-center gap-y-2">
                      <div className="w-6 h-6 flex justify-center items-center">
                        <div className="p-1 rounded-full bg-robin">
                          <svg
                            viewBox="0 0 24 24"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            fill="none"
                            className="stroke-2 z-icon stroke-current w-4 h-4 z-icon--check text-vanilla-400"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>{" "}
                        </div>
                      </div>
                      <span className="h-full border-l border-2 rounded-sm left-4 border-transparent"></span>
                    </div>{" "}
                    <div className="flex flex-col -mt-1 gap-y-px">
                      <span className="uppercase text-vanilla-400">
                        Friday, October 29
                      </span>{" "}
                      <span className="font-medium text-vanilla-100">
                        [San Francisco &amp; Bengaluru] Hacktoberfest
                        after-party #3
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="md:w-1/2">
              <div className="relative z-10 flex flex-col p-6 border-t border-b shadow-2xl bg-ink-400 md:border border-ink-200 bg-opacity-60 md:rounded-lg md:mt-6 gap-y-6">
                <div className="flex flex-row justify-between gap-8 w-full">
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-vanilla-100">
                      [VIRTUAL] Hacktoberfest Kickoff
                    </span>{" "}
                    <span className="text-vanilla-100">
                      <svg
                        viewBox="0 0 24 24"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill="none"
                        className="inline-block stroke-1.5 mr-1 -mt-1 my-auto z-icon stroke-current w-4 h-4 z-icon--calendar text-vanilla-100"
                      >
                        <rect
                          x="3"
                          y="4"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"
                        ></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      Monday, October 4
                    </span>
                  </div>{" "}
                  <div>
                    <img
                      src="https://assets.deepsource.io/a6b8ac2/img/hf-logo.d805e08.svg"
                      className="flex-shrink-0 w-10"
                    />
                  </div>
                </div>{" "}
                <div>
                  <p className="text-vanilla-400"></p>
                </div>{" "}
                <div className="flex flex-col leading-relaxed text-vanilla-200 gap-y-8">
                  <div className="flex flex-col max-w-2xl space-y-1 text-sm">
                    <div className="uppercase text-robin-200">20:00 PT</div>{" "}
                    <div className="leading-tight text-vanilla-100">
                      Welcome + what is Hacktoberfest?
                    </div>{" "}
                    <div className="text-base text-vanilla-300"></div>
                  </div>
                  <div className="flex flex-col max-w-2xl space-y-1 text-sm">
                    <div className="uppercase text-robin-200">20:05 PT</div>{" "}
                    <div className="leading-tight text-vanilla-100">
                      Code quality contributions to open-source projects
                    </div>{" "}
                    <div className="text-base text-vanilla-300"></div>
                  </div>
                  <div className="flex flex-col max-w-2xl space-y-1 text-sm">
                    <div className="uppercase text-robin-200">20:10 PT</div>{" "}
                    <div className="leading-tight text-vanilla-100">
                      How to make high-quality contributions as beginners?
                    </div>{" "}
                    <div className="text-base text-vanilla-300"></div>
                  </div>
                  <div className="flex flex-col max-w-2xl space-y-1 text-sm">
                    <div className="uppercase text-robin-200">20:13 PT</div>{" "}
                    <div className="leading-tight text-vanilla-100">
                      How to attract high-quality contributions as maintainers?
                    </div>{" "}
                    <div className="text-base text-vanilla-300"></div>
                  </div>
                  <div className="flex flex-col max-w-2xl space-y-1 text-sm">
                    <div className="uppercase text-robin-200">20:15 PT</div>{" "}
                    <div className="leading-tight text-vanilla-100">
                      Didier Lopes presents Gamestonk Terminal
                    </div>{" "}
                    <div className="text-base text-vanilla-300"></div>
                  </div>
                  <div className="flex flex-col max-w-2xl space-y-1 text-sm">
                    <div className="uppercase text-robin-200">20:30 PT</div>{" "}
                    <div className="leading-tight text-vanilla-100">
                      Tushar Sadhwani presents zxpy
                    </div>{" "}
                    <div className="text-base text-vanilla-300"></div>
                  </div>
                  <div className="flex flex-col max-w-2xl space-y-1 text-sm">
                    <div className="uppercase text-robin-200">20:45 PT</div>{" "}
                    <div className="leading-tight text-vanilla-100">
                      Stephan Dilly presents GitUI
                    </div>{" "}
                    <div className="text-base text-vanilla-300"></div>
                  </div>
                  <div className="flex flex-col max-w-2xl space-y-1 text-sm">
                    <div className="uppercase text-robin-200">20:50 PT</div>{" "}
                    <div className="leading-tight text-vanilla-100">
                      Aniket Maurya presents gradsflow
                    </div>{" "}
                    <div className="text-base text-vanilla-300"></div>
                  </div>
                  <div className="flex flex-col max-w-2xl space-y-1 text-sm">
                    <div className="uppercase text-robin-200">21:05 PT</div>{" "}
                    <div className="leading-tight text-vanilla-100">
                      Closing notes + Kickoff!
                    </div>{" "}
                    <div className="text-base text-vanilla-300"></div>
                  </div>
                </div>{" "}
                <div className="bg-robin bg-opacity-50 p-2 w-full border border-robin border-opacity-40 rounded-md shadow-robin transition ease-in-out duration-200">
                  <a
                    href="https://youtu.be/lVtxXyCAZ-4"
                    type="link"
                    className="z-btn inline-flex items-center justify-center font-medium transition-colors duration-300 ease-in-out rounded-sm focus:outline-none whitespace-nowrap relative z-10 bg-robin hover:bg-robin-600 text-vanilla-100 stroke-1.5 w-full text-vanilla-100 z-btn--vanilla-100 p-0 h-12 px-4 py-2.5 text-lg space-x-2.5 leading-9 bg-juniper hover:bg-juniper-600"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      fill="none"
                      className="z-icon stroke-current w-6 h-6 z-icon--youtube text-vanilla-100 mr-2.5"
                    >
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                    </svg>
                    Watch on YouTube
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EventSchedule;
