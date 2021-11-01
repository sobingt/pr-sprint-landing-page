import React from "react";

function Cheer() {
  return (
    <div>
      <section
        id="cheers"
        className="relative z-30 px-6 py-16 md:py-32 bg-vanilla-100 md:px-0"
      >
        <div className="grid grid-cols-1 gap-6">
          <img src="\assets\img\beer.svg" className="w-48 mx-auto md:w-64" />
          <h3 className="font-bold text-2.5xl leading-tight text-center max-w-xl mx-auto">
            Hacktoberfest afterparty, every October Friday!
          </h3>{" "}
          <p className="max-w-3xl mx-auto text-lg text-center text-ink-300">
            Celebrate with the community! If you're an open-sourcerer, and are
            based in SF or Bangalore, beer is on us! Every friday in October
            2021.
          </p>{" "}
          <a
            href="_"
            
            className="z-btn inline-flex items-center justify-center font-medium transition-colors duration-300 ease-in-out rounded-sm focus:outline-none whitespace-nowrap mx-auto stroke-2 bg-robin hover:bg-robin-600 text-vanilla-100 z-btn--vanilla-100 p-0 h-10 px-4 py-2 text-base space-x-2 leading-8 bg-juniper hover:bg-juniper-600"
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
            Drop your info
          </a>
        </div>
      </section>
    </div>
  );
}

export default Cheer;
