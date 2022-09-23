import Wrapping from "wrapping-letters-react";

const styles = require("@styles/home/introduction.module.scss");

export function Intrduction() {
  const StrongTag = ({
    text,
    cssClass,
  }: {
    text: string;
    cssClass: string;
  }) => {
    return (
      <strong className={styles[cssClass]}>
        <i>{text}</i>
      </strong>
    );
  };

  return (
    <>
      <div className={styles.container}>
        <p className={styles.textToLeft}>
          <div className={styles.textContainer}>
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
          </div>
        </p>
      </div>
    </>
  );
}
