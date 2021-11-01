import React from "react";
import Style from "./style.module.scss";

function Hero() {
  return (
    <div className={Style.hero}>
      <img src="\assets\img\herobg.svg" alt="" />
      <div className={Style.content}>
        <h1>This Hacktoberfest, <span>ship good code</span></h1>
        <h2>
          Make meaningful open-source contributions by improving the code
          quality of thousands of projects.
        </h2>
      </div>
      <div className={Style.btns}>
          <a className={Style.maintaine} href="#"> <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" fill="none" class="z-icon stroke-current w-5 h-5 z-icon--award text-vanilla-100 mr-2"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>I’m a maintainer</a>
          <a className={Style.contribute} href="#"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" fill="none" class="z-icon stroke-current w-5 h-5 z-icon--git-pull-request text-ink-400 mr-2"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line></svg>I'm a contributor</a>
      </div>
    </div>
  );
}

export default Hero;
