import React from "react";

function Navbar() {
  return (
    <div>
      <div
        className="bg-transparent border-transparent header-wrapper fixed left-0 top-0 flex z-1000 justify-center w-full max-w-full border-b min-h-16 transition-DEFAULT duration-75 backdrop-blur bg-opacity-25 no-filter:bg-opacity-95"
        data-v-6890bf12=""
      >
        <nav
          className="max-w-6xl
        w-full flex items-center px-6 md:px-0 space-x-3"
          data-v-6890bf12=""
        >
          <div className="first flex items-center flex-1" data-v-6890bf12="">
            <a href="/" data-v-6890bf12="">
              <img
                src="\assets\img\logo.svg"
                alt="DeepSource"
                className="hidden h-6 max-w-none md:block"
                data-v-6890bf12=""
              />{" "}
              <img
                src="\assets\img\logomob.svg"
                alt="DeepSource"
                className="h-8 max-w-none md:hidden"
                data-v-6890bf12=""
              />
            </a>
          </div>
          <div
            className="lg:opacity-1
              second hidden lg:flex flex-1 items-center justify-center space-x-4 w-full transition-all duration-200 ease-in-out"
            data-v-6890bf12=""
          >
            <div
              className="z-list flex flex-col border-b text-vanilla-100 border-ink-200 lg:border-0 lg:hidden"
              data-v-6890bf12=""
            >
              <div className="font-medium"></div>
              <div
                to="/discover"
                className="z-list-item flex space-x-1 flex px-4 py-2 font-medium cursor-pointer"
              >
                <a
                  to="/discover"
                  className="hover:text-juniper transition-all duration-300 ease-in-out"
                >
                  Discover
                </a>
              </div>
            </div>
            <div
              className="z-list flex flex-col border-b text-vanilla-100 border-ink-200 lg:border-0 lg:hidden"
              data-v-6890bf12=""
            >
              <div className="font-medium"></div>
              <div
                to="#events"
                className="z-list-item flex space-x-1 flex px-4 py-2 font-medium cursor-pointer"
              >
                <a href="/hacktoberfest/#events" className="">
                  Events
                </a>
              </div>
            </div>
            <div
              className="z-list flex flex-col border-b text-vanilla-100 border-ink-200 lg:border-0 lg:hidden"
              data-v-6890bf12=""
            >
              <div className="font-medium"></div>
              <div
                to="https://discord.gg/Xt4D8u5NKY"
                className="z-list-item flex space-x-1 flex px-4 py-2 font-medium cursor-pointer"
              >
                <a
                  to="https://discord.gg/Xt4D8u5NKY"
                  className="hover:text-juniper transition-all duration-300 ease-in-out"
                >
                  Join Discord
                </a>
              </div>
            </div>
            <div
              className="z-list flex flex-col border-b text-vanilla-100 border-ink-200 lg:border-0 lg:hidden"
              data-v-6890bf12=""
            >
              <div className="font-medium"></div>
              <div
                to="/about"
                className="z-list-item flex space-x-1 flex px-4 py-2 font-medium cursor-pointer"
              >
                <a href="" className="">
                  Company
                </a>
              </div>
            </div>
            <div
              className="z-list flex flex-col border-b text-vanilla-100 border-ink-200 lg:border-0 lg:hidden"
              data-v-6890bf12=""
            >
              <div className="font-medium"></div>
              <div
                to="/enterprise"
                className="z-list-item flex space-x-1 flex px-4 py-2 font-medium cursor-pointer"
              >
                <a href="" className="">
                  Enterprise
                </a>
              </div>
            </div>{" "}
            <a
              href=""
              type="link"
              className="z-btn inline-flex items-center justify-center font-medium transition-colors duration-300 ease-in-out rounded-sm focus:outline-none whitespace-nowrap hidden lg:inline-flex text-vanilla-100 text-juniper p-0 h-10 px-4 py-2 text-base space-x-2 leading-8 font-normal hover:bg-ink-200"
              data-v-6890bf12=""
            >
              Discover
            </a>
            <a
              href="#events"
              type="link"
              className="z-btn inline-flex items-center justify-center font-medium transition-colors duration-300 ease-in-out rounded-sm focus:outline-none whitespace-nowrap hidden lg:inline-flex text-vanilla-100 text-juniper p-0 h-10 px-4 py-2 text-base space-x-2 leading-8 font-normal hover:bg-ink-200"
              data-v-6890bf12=""
            >Events</a>
            <a
              href="https://discord.gg"
              type="link"
              className="z-btn inline-flex items-center justify-center font-medium transition-colors duration-300 ease-in-out rounded-sm focus:outline-none whitespace-nowrap hidden lg:inline-flex text-vanilla-100 text-juniper p-0 h-10 px-4 py-2 text-base space-x-2 leading-8 font-normal hover:bg-ink-200"
              data-v-6890bf12=""
            >
              Discord
            </a>
            <a
              href=""
              type="link"
              className="z-btn inline-flex items-center justify-center font-medium transition-colors duration-300 ease-in-out rounded-sm focus:outline-none whitespace-nowrap hidden lg:inline-flex text-vanilla-100 text-juniper p-0 h-10 px-4 py-2 text-base space-x-2 leading-8 font-normal hover:bg-ink-200"
              data-v-6890bf12=""
            >
              Company
            </a>
            <a
              href="/enterprise"
              type="link"
              className="z-btn inline-flex items-center justify-center font-medium transition-colors duration-300 ease-in-out rounded-sm focus:outline-none whitespace-nowrap hidden lg:inline-flex text-vanilla-100 text-juniper p-0 h-10 px-4 py-2 text-base space-x-2 leading-8 font-normal hover:bg-ink-200"
              data-v-6890bf12=""
            >
              Enterprise
            </a>
          </div>
          <div
            className="third flex flex-1 items-center space-x-3 justify-end"
            data-v-6890bf12=""
          >
            <a
              href="/login"
              type="link"
              className="z-btn inline-flex items-center justify-center font-medium transition-colors duration-300 ease-in-out rounded-sm focus:outline-none whitespace-nowrap text-vanilla-100 text-juniper p-0 h-10 px-4 py-2 text-base space-x-2 leading-8 font-normal hover:bg-ink-200"
              data-v-6890bf12=""
            >
              Log in
            </a>{" "}
            <a
              href=""
              type="link"
              className="z-btn inline-flex items-center justify-center font-medium transition-colors duration-300 ease-in-out rounded-sm focus:outline-none whitespace-nowrap text-primary z-btn--primary p-0 h-10 px-4 py-2 text-base space-x-2 leading-8 bg-juniper hover:bg-juniper-600"
              data-v-6890bf12=""
            >
              Sign up
            </a>
          </div>
          <div className="flex cursor-pointer lg:hidden" data-v-6890bf12="">
            <svg
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="none"
              className="z-icon stroke-current w-6 h-6 z-icon--menu text-vanilla-400"
              data-v-6890bf12=""
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </div>
        </nav>
        <div
          className="-right-full
              overflow-y-scroll lg:-right-full w-full h-screen absolute flex flex-col transition-all duration-200 ease-in-out top-0 bg-ink-300 flex flex-col"
          data-v-6890bf12=""
        >
          <div
            className="flex cursor-pointer justify-end p-4 border-b border-ink-200"
            data-v-6890bf12=""
          >
            <svg
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="none"
              className="z-icon stroke-current w-6 h-6 z-icon--x text-vanilla-100"
              data-v-6890bf12=""
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </div>
          <div
            className="z-list flex flex-col border-b text-vanilla-100 border-ink-200 lg:border-0 lg:hidden"
            data-v-6890bf12=""
          >
            <div className="font-medium"></div>
            <div
              to="/discover"
              className="z-list-item flex space-x-1 flex px-4 py-2 font-medium cursor-pointer"
            >
              <a
                to="/discover"
                className="hover:text-juniper transition-all duration-300 ease-in-out"
              >
                Discover
              </a>
            </div>
          </div>
          <div
            className="z-list flex flex-col border-b text-vanilla-100 border-ink-200 lg:border-0 lg:hidden"
            data-v-6890bf12=""
          >
            <div className="font-medium"></div>
            <div
              to="#events"
              className="z-list-item flex space-x-1 flex px-4 py-2 font-medium cursor-pointer"
            >
              <a href="/hacktoberfest/#events" className="">
                Events
              </a>
            </div>
          </div>
          <div
            className="z-list flex flex-col border-b text-vanilla-100 border-ink-200 lg:border-0 lg:hidden"
            data-v-6890bf12=""
          >
            <div className="font-medium"></div>
            <div
              to="https://discord.gg/Xt4D8u5NKY"
              className="z-list-item flex space-x-1 flex px-4 py-2 font-medium cursor-pointer"
            >
              <a
                to="https://discord.gg/Xt4D8u5NKY"
                className="hover:text-juniper transition-all duration-300 ease-in-out"
              >
                Join Discord
              </a>
            </div>
          </div>
          <div
            className="z-list flex flex-col border-b text-vanilla-100 border-ink-200 lg:border-0 lg:hidden"
            data-v-6890bf12=""
          >
            <div className="font-medium"></div>
            <div
              to="/about"
              className="z-list-item flex space-x-1 flex px-4 py-2 font-medium cursor-pointer"
            >
              <a href="/about" className="">
                Company
              </a>
            </div>
          </div>
          <div
            className="z-list flex flex-col border-b text-vanilla-100 border-ink-200 lg:border-0 lg:hidden"
            data-v-6890bf12=""
          >
            <div className="font-medium"></div>
            <div
              to="/enterprise"
              className="z-list-item flex space-x-1 flex px-4 py-2 font-medium cursor-pointer"
            >
              <a href="/enterprise" className="">
                Enterprise
              </a>
            </div>
          </div>{" "}
          <a
            href="/discover"
            type="link"
            className="z-btn inline-flex items-center justify-center font-medium transition-colors duration-300 ease-in-out rounded-sm focus:outline-none whitespace-nowrap hidden lg:inline-flex text-vanilla-100 text-juniper p-0 h-10 px-4 py-2 text-base space-x-2 leading-8 font-normal hover:bg-ink-200"
            data-v-6890bf12=""
          >
            Discover
          </a>
          <a
            href="#events"
            type="link"
            className="z-btn inline-flex items-center justify-center font-medium transition-colors duration-300 ease-in-out rounded-sm focus:outline-none whitespace-nowrap hidden lg:inline-flex text-vanilla-100 text-juniper p-0 h-10 px-4 py-2 text-base space-x-2 leading-8 font-normal hover:bg-ink-200"
            data-v-6890bf12=""
          >
            Events
          </a>
          <a
            href="https://discord.gg/Xt4D8u5NKY"
            type="link"
            className="z-btn inline-flex items-center justify-center font-medium transition-colors duration-300 ease-in-out rounded-sm focus:outline-none whitespace-nowrap hidden lg:inline-flex text-vanilla-100 text-juniper p-0 h-10 px-4 py-2 text-base space-x-2 leading-8 font-normal hover:bg-ink-200"
            data-v-6890bf12=""
          >
            Join Discord
          </a>
          <a
            href="/about"
            type="link"
            className="z-btn inline-flex items-center justify-center font-medium transition-colors duration-300 ease-in-out rounded-sm focus:outline-none whitespace-nowrap hidden lg:inline-flex text-vanilla-100 text-juniper p-0 h-10 px-4 py-2 text-base space-x-2 leading-8 font-normal hover:bg-ink-200"
            data-v-6890bf12=""
          >
            Company
          </a>
          <a
            href="/enterprise"
            type="link"
            className="z-btn inline-flex items-center justify-center font-medium transition-colors duration-300 ease-in-out rounded-sm focus:outline-none whitespace-nowrap hidden lg:inline-flex text-vanilla-100 text-juniper p-0 h-10 px-4 py-2 text-base space-x-2 leading-8 font-normal hover:bg-ink-200"
            data-v-6890bf12=""
          >
            Enterprise
          </a>
          <div className="flex flex-col space-y-4 p-4" data-v-6890bf12="">
            <a
              href="/login"
              type="link"
              className="z-btn inline-flex items-center justify-center font-medium transition-colors duration-300 ease-in-out rounded-sm focus:outline-none whitespace-nowrap text-vanilla-100 text-juniper p-0 h-10 px-4 py-2 text-base space-x-2 leading-8 font-normal hover:bg-ink-200"
              data-v-6890bf12=""
            >
              Log in
            </a>{" "}
            <a
              href="/signup"
              type="link"
              className="z-btn inline-flex items-center justify-center font-medium transition-colors duration-300 ease-in-out rounded-sm focus:outline-none whitespace-nowrap text-primary z-btn--primary p-0 h-10 px-4 py-2 text-base space-x-2 leading-8 bg-juniper hover:bg-juniper-600"
              data-v-6890bf12=""
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
