import { useRef } from "react";
import { copy } from "@modules/copy.module";

import { BsGithub } from "react-icons/bs";
import Wrapping from "wrapping-letters-react";

const styles = require("@styles/home/introduction.module.scss");

export function Intrduction() {
  const copyButtonRef = useRef(null);

  const StrongTag = ({
    letter,
    cssClass,
  }: {
    letter: string;
    cssClass: string;
  }) => {
    return <strong className={styles[cssClass]}>{letter}</strong>;
  };

  return (
    <>
      <div className="container">
        <p className={styles.textToLeft}>
          <span className={styles.textContainer}>
            <Wrapping
              text="Start to use Wrapping Letters in your text animation to simplify your code logic in React.js"
              textOptions={{
                SpecialWrapp: {
                  wordToSearch: ["Wrapping", "Letters"],
                  structureToAdd: StrongTag,
                },
                PerWord: true,
              }}
            />
          </span>
        </p>
        <code
          ref={copyButtonRef}
          onClick={() => copy(copyButtonRef)}
          className={styles["npm-code"]}
        >
          npm install wrapping-letters-react
        </code>
        <div className={styles["networks-container"]}>
          <a
            href="https://github.com/srtager555/wrapping-letters"
            target="_blank"
            rel="noreferrer"
            className="github--anchor"
          >
            <BsGithub />
          </a>
        </div>
      </div>
    </>
  );
}
