import React from "react";
import Style from "./style.module.scss";

function Intro() {
  return (
    <div className={Style.intro}>
      <div className={Style.left}>
        <div className={Style.head}>
          <img src="\assets\img\hlogo.svg" alt="" />
          <h3>What is Hacktoberfest?</h3>
        </div>
        <p>
          Hacktoberfest is a month-long celebration of open-source software by
          DigitalOcean that encourages participation in giving back to the
          open-source community. Developers get involved by completing pull
          requests, participating in events, and donating to open source
          projects. During this event, anyone can support open source by
          contributing changes and earn limited-edition swag.
        </p>
      </div>
      <div className={Style.right}>
        <div className={Style.rightwrapper}>
          <div className={Style.head}>
            <img src="\assets\img\logoD.svg" alt="" />
            <h3>What is DeepSource?</h3>
          </div>
          <p>
            DeepSource is a fast and reliable static analysis platform that
            helps developers write good code. It integrates natively with your
            version-control providers, such as GitHub or GitLab, and helps
            prevent bugs, anti-patterns, security vulnerabilities, and
            performance issues on every pull request. DeepSource is free for
            open-source, individual developers, and small teams.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Intro;
