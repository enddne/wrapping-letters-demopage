import { useRef } from "react";
import { copy } from "@modules/copy.module";

import { GithubAnchor } from "@common/github.link";
import Wrapping from "wrapping-letters-react";

import styles from "@styles/home/content.module.scss";

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
      <div className={styles.textToLeft}>
        <div className={styles.textContainer}>
          <p>
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
          </p>
        </div>
      </div>
      <code
        ref={copyButtonRef}
        onClick={() => copy(copyButtonRef)}
        className={styles["npm-code"]}
      >
        npm install wrapping-letters-react
      </code>
      <div className={styles["networks-container"]}>
        <GithubAnchor />
      </div>
    </>
  );
}
