import Wrapping from "wrapping-letters-react";

const styles = require("@styles/home/introduction.module.scss");

export function Intrduction() {
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
        <code className={styles["npm-code"]}>
          $ npm installe wrapping-letters-react
        </code>
      </div>
    </>
  );
}
