/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import styles from "@styles/resume.module.sass";

export default function Resume() {
  return (
    <div className={styles.container}>
      <div className={styles["ctn--introduction"]}>
        <img src="/img/resume.jpg" alt="" />
        <div className={styles["content"]}>
          <h1>Carlos Ponce</h1>
          <small>Atlántida, Honduras</small>
          <p>
            Hello! I'm young Front-End developer. I started to development at
            the beginning of 2018 on JavaScript, on this 2020 I started to learn
            React.js and in 2021 I started mastering my Next.js
          </p>
          <p>
            I'm looking for a job as a Front-End developer in a team or alone,
            building website syntax with recent technologies like React.js and
            Next.js and with great documentation and communication for the team
            or future developer to join to the startup/company
          </p>
        </div>
      </div>
      <div className={styles["ctn--content"]}>
        <div className={styles["content-header"]}>
          <div className={styles["box-content"]}>
            <h3>Main Skills</h3>
            <div className={styles["skills--box"]}>
              <div className={styles["learning"]}>
                <p>I'm learning this now.</p>
                <ul>
                  <li>Typescript.js</li>
                  <li>MySql</li>
                </ul>
              </div>
              <ul>
                <li>Next.js</li>
                <li>React.js</li>
                <li>JavaScript</li>
                <li>Jest.js</li>
                <li>Sass</li>
              </ul>
            </div>
          </div>
          <div className={styles["box-content"]}>
            <h3>Qualities</h3>
            <p>
              I am a self taught developer, I really want to join the tech
              industry to develop amazing apps and grow as a person. I want to
              learn much more.
            </p>
            <ul>
              <li>
                <i>Fast learner</i>
              </li>
              <li>
                <i>Great comunication</i>
              </li>
              <li>
                <i>Overthinker</i>
              </li>
              <li>
                <i>Sympathetic</i>
              </li>
              <li>
                <i>Good listener</i>
              </li>
              <li>
                <i>A great friend :D</i>
              </li>
              <li>
                <i>Patient</i>
              </li>
              <li>
                <i>And more... I think</i>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles["content-aboutMe"]}>
          <div className={styles["experience-container"]}>
            <p>
              Take a look my experience in the frontend in my{" "}
              <a
                href="https://github.com/srtager555"
                target="_blank"
                rel="noreferrer"
              >
                Github.
              </a>
            </p>
          </div>
          <div className={styles["studies-container"]}>
            <p>
              I never stop learning,{" "}
              <a
                href="https://platzi.com/p/SrTager555/"
                target="_blank"
                rel="noreferrer"
              >
                this is my student profile
              </a>
              , it's not the best but I know what I'm doing.
            </p>
          </div>
        </div>
        <div className={styles["content-header"]}>
          <div className={styles["box-content"]}>
            <h3>Language</h3>
            <p>
              My mother tongue is Spanish, I am learning English, I did a exam
              and my result is B1, my listening and speaking is my bad point,
              but I am practicing that now; I need you to speak slowly {">.<"}{" "}
              and sometimes I use the translator to solved my typing error
              hehe...
            </p>
          </div>
          <div className={styles["box-content"]}>
            <h3>Contact</h3>
            <p>
              You can contact me by{" "}
              <a href="mailto:srtager555@gmail.com">E-mail</a> or if you don't
              want use a e-mail... you can use{" "}
              <a
                href="https://www.linkedin.com/in/srtager555/?locale=en_US"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>{" "}
              or a very weird method...{" "}
              <a
                href="https://twitter.com/srtager555"
                target="_blank"
                rel="noreferrer"
              >
                twitter
              </a>
              ...
            </p>
            <p>
              And here is my portfolio{" "}
              <a href="https://ttager.page/">ttager.page</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
