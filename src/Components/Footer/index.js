import React from "react";

function Footer() {
  return (
    <div>
      <footer className="w-full flex flex-col justify-between bg-transparent text-vanilla-100 border-t border-ink-200 min-h-102 pb-10 pt-20 bg-gradient-dark-dawn animate-gradient bg-xl">
        <div className="md:flex items-start w-full lg:mx-auto lg:max-w-7xl">
          <div className="px-6 md:px-4 lg:px-6">
            <span className="flex w-20 md:w-10 xl:w-20 mb-12 md:mb-0">
              <img src="" className="max-w-none h-8" />
            </span>
          </div>
          <span className="hidden md:flex items-start w-full">
            <div className="flex flex-1 flex-nowrap md:flex-wrap lg:flex-nowrap items-start mx-4 mt-2">
              <ul className="pb-8 w-32 lg:w-auto px-6 md:px-4 lg:px-6">
                <span className="block">
                  <li className="leading-3 font-medium tracking-wider py-4 md:pt-0 uppercase text-sm text-vanilla-800">
                    Product
                  </li>
                  <span className="text-vanilla-300">
                    {" "}
                    <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap hover:text-juniper cursor-pointer">
                      <a href="" className="">
                        Features
                      </a>
                    </li>
                    <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap hover:text-juniper cursor-pointer">
                      {" "}
                      <a href="" className="">
                        Pricing
                      </a>{" "}
                    </li>
                    <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap hover:text-juniper cursor-pointer">
                      <a href="" target="_self">
                        For teams
                      </a>
                    </li>
                    <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap hover:text-juniper cursor-pointer">
                      {" "}
                      <a href="" className="">
                        For enterprise
                      </a>
                    </li>
                    <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap hover:text-juniper cursor-pointer">
                      <a href="" className="">
                        Security
                      </a>
                    </li>
                  </span>
                </span>
              </ul>{" "}
              <ul className="pb-8 w-32 lg:w-auto px-6 md:px-4 lg:px-6">
                <span className="block">
                  <li className="leading-3 font-medium tracking-wider py-4 md:pt-0 uppercase text-sm text-vanilla-800">
                    Resources
                  </li>
                  <span className="text-vanilla-300">
                    {" "}
                    <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap hover:text-juniper cursor-pointer">
                      <a href="" target="_self">
                        Blog
                      </a>
                    </li>
                    <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap hover:text-juniper cursor-pointer">
                      <a href="">Changelog</a>
                    </li>
                    <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap hover:text-juniper cursor-pointer">
                      <a href="" target="_blank">
                        Community
                      </a>
                    </li>
                    <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap hover:text-juniper cursor-pointer">
                      <a href="" target="_self">
                        Customer stories
                      </a>
                    </li>
                    <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap hover:text-juniper cursor-pointer">
                      <a href="" target="_self">
                        Documentation
                      </a>
                    </li>
                    <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap hover:text-juniper cursor-pointer">
                      <a href="" target="_self">
                        Glossary
                      </a>
                    </li>
                    <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap hover:text-juniper cursor-pointer">
                      <a href="" target="_blank">
                        Good Code Podcast
                      </a>
                    </li>
                    <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap hover:text-juniper cursor-pointer">
                      <a href="" target="_blank">
                        Good First Issue
                      </a>
                    </li>
                    <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap hover:text-juniper cursor-pointer">
                      <a href="" target="_self">
                        Spotlight
                      </a>
                    </li>
                    <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap hover:text-juniper cursor-pointer">
                      {" "}
                      <a href="" className="">
                        Startup Program
                      </a>
                    </li>
                    <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap hover:text-juniper cursor-pointer">
                      {" "}
                      <a href="" className="">
                        State of Go
                      </a>
                    </li>
                    <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap hover:text-juniper cursor-pointer">
                      {" "}
                      <a href="/programmers-oath" className="">
                        Programmer's Oath
                      </a>
                    </li>
                  </span>
                </span>
              </ul>{" "}
              <div className="flex flex-col w-32 lg:w-auto">
                <ul className="pb-8 px-6 md:px-4 lg:px-6">
                  <span className="block">
                    <li className="leading-3 font-medium tracking-wider py-4 md:pt-0 uppercase text-sm text-vanilla-800">
                      Company
                    </li>
                    <span className="text-vanilla-300">
                      {" "}
                      <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap hover:text-juniper cursor-pointer">
                        {" "}
                        <a href="/about" className="">
                          About
                        </a>
                      </li>
                      <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap hover:text-juniper cursor-pointer">
                        <a href="https://careers.deepsource.io/" target="_self">
                          Careers
                        </a>
                      </li>
                      <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap hover:text-juniper cursor-pointer">
                        <a href="/tech-writer" target="_self">
                          Write for us
                        </a>
                      </li>
                      <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap hover:text-juniper cursor-pointer">
                        {" "}
                        <a href="/privacy" className="">
                          Privacy Policy
                        </a>
                      </li>
                      <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap hover:text-juniper cursor-pointer">
                        {" "}
                        <a href="/terms-of-service" className="">
                          Terms of Service
                        </a>
                      </li>
                      <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap hover:text-juniper cursor-pointer">
                        <a href="mailto:press@deepsource.io" target="_self">
                          Press enquiries
                        </a>
                      </li>
                      <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap hover:text-juniper cursor-pointer">
                        <a
                          href="https://deepsource.io/brand-assets/"
                          target="_self"
                        >
                          Brand assets
                        </a>
                      </li>
                    </span>
                  </span>
                </ul>{" "}
                <ul className="pb-8 px-6 md:px-4 lg:px-6">
                  <span className="block">
                    <li className="leading-3 font-medium tracking-wider py-4 md:pt-0 uppercase text-sm text-vanilla-800">
                      Getting Started
                    </li>
                    <span className="text-vanilla-300">
                      {" "}
                      <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap hover:text-juniper cursor-pointer">
                        <a href="/glossary/static-analysis" target="_self">
                          What is static analysis?
                        </a>
                      </li>
                      <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap hover:text-juniper cursor-pointer">
                        <a
                          href="/blog/introduction-static-code-analysis"
                          target="_self"
                        >
                          Static code analysis primer
                        </a>
                      </li>
                      <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap hover:text-juniper cursor-pointer">
                        <a href="/glossary/continuous-quality" target="_self">
                          What is continuous quality?
                        </a>
                      </li>
                    </span>
                  </span>
                </ul>
              </div>{" "}
              <div className="flex flex-col w-64 lg:w-auto">
                <ul className="pb-8 px-6 md:px-4 lg:px-6">
                  <span className="block">
                    <li className="leading-3 font-medium tracking-wider py-4 md:pt-0 uppercase text-sm text-vanilla-800">
                      Support
                    </li>
                    <span className="text-vanilla-300">
                      {" "}
                      <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap hover:text-juniper cursor-pointer">
                        <a href="/docs/resources/faq/" target="_self">
                          FAQs
                        </a>
                      </li>
                      <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap hover:text-juniper cursor-pointer">
                        <a href="https://status.deepsource.io" target="_blank">
                          System status
                        </a>
                      </li>
                      <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap hover:text-juniper cursor-pointer">
                        {" "}
                        <a href="/schedule-demo/" className="">
                          Contact sales
                        </a>
                      </li>
                      <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap hover:text-juniper cursor-pointer">
                        <a
                          href="https://deepsource.io/discord/"
                          target="_blank"
                        >
                          Join Discord server
                        </a>
                      </li>
                    </span>
                  </span>
                </ul>{" "}
                <ul className="pb-8 px-6 md:px-4 lg:px-6">
                  <span className="block">
                    <li className="leading-3 font-medium tracking-wider py-4 md:pt-0 uppercase text-sm text-vanilla-800">
                      Socials
                    </li>
                    <span className="text-vanilla-300">
                      {" "}
                      <span className="flex">
                        <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap mr-4 hover:text-juniper cursor-pointer">
                          <a
                            href=""
                            target="_blank"
                          >
                            <svg
                              viewBox="0 0 24 24"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="none"
                              className="z-icon stroke-1.5 w-8 h-8 z-icon--z-rss text-vanilla-400"
                            >
                              <path
                                d="M7.33325 11.4167C8.72564 11.4167 10.061 11.9699 11.0456 12.9544C12.0301 13.939 12.5833 15.2744 12.5833 16.6667"
                                stroke="currentColor"
                                stroke-width="1.2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                              <path
                                d="M7.33325 7.33325C9.80861 7.33325 12.1826 8.31658 13.9329 10.0669C15.6833 11.8173 16.6666 14.1912 16.6666 16.6666"
                                stroke="currentColor"
                                stroke-width="1.2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                              <path
                                d="M7.91659 16.6667C8.23875 16.6667 8.49992 16.4055 8.49992 16.0833C8.49992 15.7612 8.23875 15.5 7.91659 15.5C7.59442 15.5 7.33325 15.7612 7.33325 16.0833C7.33325 16.4055 7.59442 16.6667 7.91659 16.6667Z"
                                fill="#C4C4C4"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </svg>
                          </a>
                        </li>
                        <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap mr-4 hover:text-juniper cursor-pointer">
                          <a
                            href=""
                            target="_blank"
                          >
                            <svg
                              viewBox="0 0 24 24"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="none"
                              className="z-icon stroke-1.5 w-8 h-8 z-icon--z-github text-vanilla-400"
                            >
                              <path
                                d="M12.0002 5.4978C10.4172 5.49787 8.88582 6.06121 7.68016 7.08703C6.47449 8.11286 5.67318 9.53422 5.4196 11.0968C5.16602 12.6594 5.47673 14.2612 6.29611 15.6156C7.1155 16.9701 8.39011 17.9888 9.89186 18.4895C10.2252 18.5478 10.3502 18.3478 10.3502 18.1728C10.3502 18.0145 10.3419 17.4895 10.3419 16.9311C8.66685 17.2395 8.23351 16.5228 8.10018 16.1478C7.95223 15.7831 7.7177 15.4599 7.41685 15.2061C7.18351 15.0811 6.85018 14.7728 7.40851 14.7645C7.6217 14.7876 7.82617 14.8618 8.0046 14.9807C8.18303 15.0997 8.33016 15.2599 8.43351 15.4478C8.52469 15.6116 8.6473 15.7558 8.79431 15.8721C8.94131 15.9885 9.10983 16.0746 9.2902 16.1257C9.47057 16.1768 9.65925 16.1918 9.84543 16.1699C10.0316 16.1479 10.2116 16.0894 10.3752 15.9978C10.404 15.6589 10.5551 15.342 10.8002 15.1062C9.31685 14.9395 7.76685 14.3645 7.76685 11.8145C7.75748 11.1519 8.00197 10.5109 8.45018 10.0228C8.24637 9.44697 8.27022 8.81501 8.51685 8.25616C8.51685 8.25616 9.07516 8.08115 10.3502 8.93949C11.441 8.63947 12.5927 8.63947 13.6835 8.93949C14.9585 8.07282 15.5168 8.25616 15.5168 8.25616C15.7635 8.815 15.7874 9.44697 15.5835 10.0228C16.0331 10.51 16.2778 11.1516 16.2668 11.8145C16.2668 14.3728 14.7085 14.9395 13.2252 15.1062C13.3843 15.2674 13.5068 15.461 13.5845 15.6738C13.6621 15.8866 13.693 16.1137 13.6752 16.3395C13.6752 17.2312 13.6668 17.9478 13.6668 18.1728C13.6668 18.3478 13.7918 18.5562 14.1252 18.4895C15.6243 17.9847 16.8952 16.9636 17.7111 15.6085C18.527 14.2534 18.8348 12.6524 18.5794 11.0913C18.3241 9.53023 17.5223 8.11072 16.3172 7.08614C15.112 6.06157 13.582 5.49863 12.0002 5.4978Z"
                                fill="#C0C1C3"
                              ></path>
                            </svg>
                          </a>
                        </li>
                        <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap mr-4 hover:text-juniper cursor-pointer">
                          <a
                            href=""
                            target="_blank"
                          >
                            <svg
                              viewBox="0 0 24 24"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="none"
                              className="z-icon stroke-1.5 w-8 h-8 z-icon--z-linkedin text-vanilla-400"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M18.9997 18.4814H16.3075V13.7602C16.3075 12.465 15.7374 11.7425 14.715 11.7425C13.6025 11.7425 12.9422 12.4954 12.9422 13.7602V18.4814H10.25V9.71211H12.9422V10.6983C12.9422 10.6983 13.7869 9.21293 15.6903 9.21293C17.5944 9.21293 18.9997 10.3772 18.9997 12.7868C18.9997 15.1956 18.9997 18.4814 18.9997 18.4814ZM6.31411 7.52778C5.58894 7.52778 5.00139 6.96171 5.00139 6.26363C5.00139 5.56607 5.58894 5 6.31411 5C7.03875 5 7.6263 5.56607 7.6263 6.26363C7.62684 6.96171 7.03875 7.52778 6.31411 7.52778ZM5 18.4814H7.62491V10.0555H5V18.4814Z"
                                fill="#C0C1C3"
                              ></path>
                            </svg>
                          </a>
                        </li>
                        <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap mr-4 hover:text-juniper cursor-pointer">
                          <a
                            href=""
                            target="_blank"
                          >
                            <svg
                              viewBox="0 0 24 24"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="none"
                              className="z-icon stroke-1.5 w-8 h-8 z-icon--z-facebook text-vanilla-400"
                            >
                              <path
                                d="M13.71 7.76844H15.0417V5.51594C14.397 5.44889 13.7491 5.41579 13.1009 5.41677C11.1742 5.41677 9.85671 6.5926 9.85671 8.74594V10.6018H7.68213V13.1234H9.85671V19.5834H12.4634V13.1234H14.6309L14.9567 10.6018H12.4634V8.99385C12.4634 8.2501 12.6617 7.76844 13.71 7.76844Z"
                                fill="#C0C1C3"
                              ></path>
                            </svg>
                          </a>
                        </li>
                      </span>
                    </span>
                  </span>
                </ul>
              </div>
            </div>
            <div className="flex items-start flex-wrap px-6 md:px-4 lg:px-6">
              <span className="flex flex-col text-sm text-center p-0 mr-6 mb-2">
                <img
                  src="https://assets.deepsource.io/a6b8ac2/img/GDPR.1f9a164.svg"
                  className="w-12 mb-2"
                />
              </span>{" "}
              <span className="flex flex-col text-sm text-center p-0 mb-2">
                <img
                  src="https://assets.deepsource.io/a6b8ac2/img/SOC2.66f0e80.svg"
                  className="mb-2 w-16"
                />
              </span>
            </div>
          </span>
          <span className="block md:hidden w-full">
            <div className="block">
              <ul className="px-6 md:px-4 lg:px-6">
                <span className="flex items-center cursor-pointer inline-block hover:opacity-75 select-none font-medium tracking-wider w-full leading-3 py-4 md:pt-0 uppercase text-sm text-vanilla-800">
                  <span className="flex flex-1">Product</span>
                  <svg
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                    className="transform z-icon stroke-current w-6 h-6 z-icon--chevron-right text-vanilla-400"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </span>
                <span className="block overflow-scroll transition-max-height duration-500 ease-in-out max-h-0">
                  <span className="block text-sm md:text-md mx-1">
                    {" "}
                    <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap hover:text-juniper cursor-pointer">
                      {" "}
                      <a href="/features" className="">
                        Features
                      </a>
                    </li>
                    <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap hover:text-juniper cursor-pointer">
                      {" "}
                      <a href="/pricing" className="">
                        Pricing
                      </a>
                    </li>
                    <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap hover:text-juniper cursor-pointer">
                      <a href="/teams" target="_self">
                        For teams
                      </a>
                    </li>
                    <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap hover:text-juniper cursor-pointer">
                      {" "}
                      <a href="/enterprise" className="">
                        For enterprise
                      </a>
                    </li>
                    <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap hover:text-juniper cursor-pointer">
                      {" "}
                      <a href="/security" className="">
                        Security
                      </a>
                    </li>
                  </span>
                </span>
              </ul>{" "}
              <ul className="px-6 md:px-4 lg:px-6">
                <span className="flex items-center cursor-pointer inline-block hover:opacity-75 select-none font-medium tracking-wider w-full leading-3 py-4 md:pt-0 uppercase text-sm text-vanilla-800">
                  <span className="flex flex-1">Resources</span>
                  <svg
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                    className="transform z-icon stroke-current w-6 h-6 z-icon--chevron-right text-vanilla-400"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </span>
                <span className="block overflow-scroll transition-max-height duration-500 ease-in-out max-h-0">
                  <span className="block text-sm md:text-md mx-1">
                    {" "}
                    <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap hover:text-juniper cursor-pointer">
                      <a href="/blog" target="_self">
                        Blog
                      </a>
                    </li>
                    <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap hover:text-juniper cursor-pointer">
                      <a
                        href="https://changelog.deepsource.io/"
                        target="_blank"
                      >
                        Changelog
                      </a>
                    </li>
                    <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap hover:text-juniper cursor-pointer">
                      <a href="https://discuss.deepsource.io/" target="_blank">
                        Community
                      </a>
                    </li>
                    <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap hover:text-juniper cursor-pointer">
                      <a href="/customers" target="_self">
                        Customer stories
                      </a>
                    </li>
                    <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap hover:text-juniper cursor-pointer">
                      <a href="/docs" target="_self">
                        Documentation
                      </a>
                    </li>
                    <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap hover:text-juniper cursor-pointer">
                      <a href="" target="_self">
                        Glossary
                      </a>
                    </li>
                    <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap hover:text-juniper cursor-pointer">
                      <a
                        href=""
                        target="_blank"
                      >
                        Good Code Podcast
                      </a>
                    </li>
                    <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap hover:text-juniper cursor-pointer">
                      <a href="" target="_blank">
                        Good First Issue
                      </a>
                    </li>
                    <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap hover:text-juniper cursor-pointer">
                      <a href="" target="_self">
                        Spotlight
                      </a>
                    </li>
                    <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap hover:text-juniper cursor-pointer">
                      {" "}
                      <a href="/startup-program" className="">
                        Startup Program
                      </a>
                    </li>
                    <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap hover:text-juniper cursor-pointer">
                      {" "}
                      <a href="/resources/whitepapers/state-of-go" className="">
                        State of Go
                      </a>
                    </li>
                    <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap hover:text-juniper cursor-pointer">
                      {" "}
                      <a href="/programmers-oath" className="">
                        Programmer's Oath
                      </a>
                    </li>
                  </span>
                </span>
              </ul>{" "}
              <ul className="px-6 md:px-4 lg:px-6">
                <span className="flex items-center cursor-pointer inline-block hover:opacity-75 select-none font-medium tracking-wider w-full leading-3 py-4 md:pt-0 uppercase text-sm text-vanilla-800">
                  <span className="flex flex-1">Company</span>
                  <svg
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                    className="transform z-icon stroke-current w-6 h-6 z-icon--chevron-right text-vanilla-400"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </span>
                <span className="block overflow-scroll transition-max-height duration-500 ease-in-out max-h-0">
                  <span className="block text-sm md:text-md mx-1">
                    {" "}
                    <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap hover:text-juniper cursor-pointer">
                      {" "}
                      <a href="" className="">
                        About
                      </a>
                    </li>
                    <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap hover:text-juniper cursor-pointer">
                      <a href="" target="_self">
                        Careers
                      </a>
                    </li>
                    <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap hover:text-juniper cursor-pointer">
                      <a href="/tech-writer" target="_self">
                        Write for us
                      </a>
                    </li>
                    <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap hover:text-juniper cursor-pointer">
                      {" "}
                      <a href="/privacy" className="">
                        Privacy Policy
                      </a>
                    </li>
                    <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap hover:text-juniper cursor-pointer">
                      {" "}
                      <a href="" className="">
                        Terms of Service
                      </a>
                    </li>
                    <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap hover:text-juniper cursor-pointer">
                      <a href="" target="_self">
                        Press enquiries
                      </a>
                    </li>
                    <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap hover:text-juniper cursor-pointer">
                      <a
                        href=""
                        target="_self"
                      >
                        Brand assets
                      </a>
                    </li>
                  </span>
                </span>
              </ul>{" "}
              <ul className="px-6 md:px-4 lg:px-6">
                <span className="flex items-center cursor-pointer inline-block hover:opacity-75 select-none font-medium tracking-wider w-full leading-3 py-4 md:pt-0 uppercase text-sm text-vanilla-800">
                  <span className="flex flex-1">Getting Started</span>
                  <svg
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                    className="transform z-icon stroke-current w-6 h-6 z-icon--chevron-right text-vanilla-400"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </span>
                <span className="block overflow-scroll transition-max-height duration-500 ease-in-out max-h-0">
                  <span className="block text-sm md:text-md mx-1">
                    {" "}
                    <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap hover:text-juniper cursor-pointer">
                      <a href="" target="_self">
                        What is static analysis?
                      </a>
                    </li>
                    <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap hover:text-juniper cursor-pointer">
                      <a
                        href=""
                        target="_self"
                      >
                        Static code analysis primer
                      </a>
                    </li>
                    <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap hover:text-juniper cursor-pointer">
                      <a href="" target="_self">
                        What is continuous quality?
                      </a>
                    </li>
                  </span>
                </span>
              </ul>{" "}
              <ul className="px-6 md:px-4 lg:px-6">
                <span className="flex items-center cursor-pointer inline-block hover:opacity-75 select-none font-medium tracking-wider w-full leading-3 py-4 md:pt-0 uppercase text-sm text-vanilla-800">
                  <span className="flex flex-1">Support</span>
                  <svg
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                    className="transform z-icon stroke-current w-6 h-6 z-icon--chevron-right text-vanilla-400"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </span>
                <span className="block overflow-scroll transition-max-height duration-500 ease-in-out max-h-0">
                  <span className="block text-sm md:text-md mx-1">
                    {" "}
                    <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap hover:text-juniper cursor-pointer">
                      <a href="/docs/resources/faq/" target="_self">
                        FAQs
                      </a>
                    </li>
                    <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap hover:text-juniper cursor-pointer">
                      <a href="" target="_blank">
                        System status
                      </a>
                    </li>
                    <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap hover:text-juniper cursor-pointer">
                      {" "}
                      <a href="" className="">
                        Contact sales
                      </a>
                    </li>
                    <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap hover:text-juniper cursor-pointer">
                      <a href="" target="_blank">
                        Join Discord server
                      </a>
                    </li>
                  </span>
                </span>
              </ul>{" "}
              <ul className="border-b border-slate py-6 px-6 md:px-4 lg:px-6">
                <span className="block">
                  <li className="leading-3 font-medium tracking-wider py-4 md:pt-0 uppercase text-sm text-vanilla-800">
                    Socials
                  </li>
                  <span className="text-vanilla-300">
                    {" "}
                    <span className="flex justify-center mt-4">
                      <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap mr-4 hover:text-juniper cursor-pointer">
                        <a
                          href=""
                          target="_blank"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            fill="none"
                            className="z-icon stroke-1.5 w-8 h-8 z-icon--z-rss text-vanilla-400"
                          >
                            <path
                              d="M7.33325 11.4167C8.72564 11.4167 10.061 11.9699 11.0456 12.9544C12.0301 13.939 12.5833 15.2744 12.5833 16.6667"
                              stroke="currentColor"
                              stroke-width="1.2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M7.33325 7.33325C9.80861 7.33325 12.1826 8.31658 13.9329 10.0669C15.6833 11.8173 16.6666 14.1912 16.6666 16.6666"
                              stroke="currentColor"
                              stroke-width="1.2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M7.91659 16.6667C8.23875 16.6667 8.49992 16.4055 8.49992 16.0833C8.49992 15.7612 8.23875 15.5 7.91659 15.5C7.59442 15.5 7.33325 15.7612 7.33325 16.0833C7.33325 16.4055 7.59442 16.6667 7.91659 16.6667Z"
                              fill="#C4C4C4"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </a>
                      </li>
                      <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap mr-4 hover:text-juniper cursor-pointer">
                        <a
                          href=""
                          target="_blank"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            fill="none"
                            className="z-icon stroke-1.5 w-8 h-8 z-icon--z-github text-vanilla-400"
                          >
                            <path
                              d="M12.0002 5.4978C10.4172 5.49787 8.88582 6.06121 7.68016 7.08703C6.47449 8.11286 5.67318 9.53422 5.4196 11.0968C5.16602 12.6594 5.47673 14.2612 6.29611 15.6156C7.1155 16.9701 8.39011 17.9888 9.89186 18.4895C10.2252 18.5478 10.3502 18.3478 10.3502 18.1728C10.3502 18.0145 10.3419 17.4895 10.3419 16.9311C8.66685 17.2395 8.23351 16.5228 8.10018 16.1478C7.95223 15.7831 7.7177 15.4599 7.41685 15.2061C7.18351 15.0811 6.85018 14.7728 7.40851 14.7645C7.6217 14.7876 7.82617 14.8618 8.0046 14.9807C8.18303 15.0997 8.33016 15.2599 8.43351 15.4478C8.52469 15.6116 8.6473 15.7558 8.79431 15.8721C8.94131 15.9885 9.10983 16.0746 9.2902 16.1257C9.47057 16.1768 9.65925 16.1918 9.84543 16.1699C10.0316 16.1479 10.2116 16.0894 10.3752 15.9978C10.404 15.6589 10.5551 15.342 10.8002 15.1062C9.31685 14.9395 7.76685 14.3645 7.76685 11.8145C7.75748 11.1519 8.00197 10.5109 8.45018 10.0228C8.24637 9.44697 8.27022 8.81501 8.51685 8.25616C8.51685 8.25616 9.07516 8.08115 10.3502 8.93949C11.441 8.63947 12.5927 8.63947 13.6835 8.93949C14.9585 8.07282 15.5168 8.25616 15.5168 8.25616C15.7635 8.815 15.7874 9.44697 15.5835 10.0228C16.0331 10.51 16.2778 11.1516 16.2668 11.8145C16.2668 14.3728 14.7085 14.9395 13.2252 15.1062C13.3843 15.2674 13.5068 15.461 13.5845 15.6738C13.6621 15.8866 13.693 16.1137 13.6752 16.3395C13.6752 17.2312 13.6668 17.9478 13.6668 18.1728C13.6668 18.3478 13.7918 18.5562 14.1252 18.4895C15.6243 17.9847 16.8952 16.9636 17.7111 15.6085C18.527 14.2534 18.8348 12.6524 18.5794 11.0913C18.3241 9.53023 17.5223 8.11072 16.3172 7.08614C15.112 6.06157 13.582 5.49863 12.0002 5.4978Z"
                              fill="#C0C1C3"
                            ></path>
                          </svg>
                        </a>
                      </li>
                      <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap mr-4 hover:text-juniper cursor-pointer">
                        <a
                          href=""
                          target="_blank"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            fill="none"
                            className="z-icon stroke-1.5 w-8 h-8 z-icon--z-linkedin text-vanilla-400"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M18.9997 18.4814H16.3075V13.7602C16.3075 12.465 15.7374 11.7425 14.715 11.7425C13.6025 11.7425 12.9422 12.4954 12.9422 13.7602V18.4814H10.25V9.71211H12.9422V10.6983C12.9422 10.6983 13.7869 9.21293 15.6903 9.21293C17.5944 9.21293 18.9997 10.3772 18.9997 12.7868C18.9997 15.1956 18.9997 18.4814 18.9997 18.4814ZM6.31411 7.52778C5.58894 7.52778 5.00139 6.96171 5.00139 6.26363C5.00139 5.56607 5.58894 5 6.31411 5C7.03875 5 7.6263 5.56607 7.6263 6.26363C7.62684 6.96171 7.03875 7.52778 6.31411 7.52778ZM5 18.4814H7.62491V10.0555H5V18.4814Z"
                              fill="#C0C1C3"
                            ></path>
                          </svg>
                        </a>
                      </li>
                      <li className="flex items-center pt-2 pb-1 text-sm whitespace-nowrap mr-4 hover:text-juniper cursor-pointer">
                        <a
                          href=""
                          target="_blank"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            fill="none"
                            className="z-icon stroke-1.5 w-8 h-8 z-icon--z-facebook text-vanilla-400"
                          >
                            <path
                              d="M13.71 7.76844H15.0417V5.51594C14.397 5.44889 13.7491 5.41579 13.1009 5.41677C11.1742 5.41677 9.85671 6.5926 9.85671 8.74594V10.6018H7.68213V13.1234H9.85671V19.5834H12.4634V13.1234H14.6309L14.9567 10.6018H12.4634V8.99385C12.4634 8.2501 12.6617 7.76844 13.71 7.76844Z"
                              fill="#C0C1C3"
                            ></path>
                          </svg>
                        </a>
                      </li>
                    </span>
                  </span>
                </span>
              </ul>
            </div>
            <div className="px-6 md:px-4 lg:px-6">
              <span className="flex justify-center py-8">
                <span className="block text-sm text-center rounded-lg mr-6">
                  <img
                    src="https://assets.deepsource.io/a6b8ac2/img/GDPR.1f9a164.svg"
                    className="max-w-none mb-2 w-12"
                  />
                </span>{" "}
                <span className="block text-sm text-centerrounded-lg">
                  <img
                    src="https://assets.deepsource.io/a6b8ac2/img/SOC2.66f0e80.svg"
                    className="max-w-none mb-2 w-16"
                  />
                </span>
              </span>
            </div>
          </span>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full md:mx-auto text-vanilla-400 text-sm lg:max-w-7xl px-6 md:px-4 lg:px-6">
          <div>
            <span className="block text-center lg:text-left">
              {" "}
              © 2021, DeepSource Corp. All rights reserved.{" "}
            </span>
          </div>
          <div>
            <span className="flex items-center mb-8 md:mb-0">
              Backed by
              <img
                src="https://assets.deepsource.io/a6b8ac2/img/YC_orange.83b52b5.SVG"
                className="ml-3 max-w-none"
              />
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
