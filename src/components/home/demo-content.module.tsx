import Wl from "wrapping-letters-react";
import { TextAppear } from "@common/appearTextAnimation";

const styles = require("@styles/home/content.module.scss");

export function DemoContent() {
  const wordsToSearch: string[] = ["Wrapping", "Letters"];

  const StrongTag = ({
    letter,
    cssStyle,
  }: {
    letter: string;
    cssStyle: object;
  }) => {
    return <strong style={cssStyle}>{letter}</strong>;
  };

  return (
    <>
      <section className={`${styles.textToLeft} ${styles["magin-bottom"]}`}>
        <div className={styles.textContainer}>
          <h2>What does Wrapping Letters do?</h2>
          <p>
            <TextAppear
              text="Wrapping Letters wrap for you the text in your code editor, simplify the task to animate in very few code lines"
              options={{
                SpecialWrapp: {
                  wordToSearch: wordsToSearch,
                  structureToAdd: StrongTag,
                },
                PerWord: true,
              }}
            />
          </p>
        </div>
      </section>
      <section className={`${styles.textToRigth} ${styles["magin-bottom"]}`}>
        <div className={styles.textContainer}>
          <h2>How does Wrapping Letters do?</h2>
          <p>
            <TextAppear
              text='Wrapping Letters search for the words through an iteration that returns a "list" of JSX elements that you can manipulate as you please'
              options={{
                SpecialWrapp: {
                  wordToSearch: wordsToSearch,
                  structureToAdd: StrongTag,
                },
                PerWord: true,
              }}
            />
          </p>
        </div>
      </section>
      <section className={`${styles.textToLeft} ${styles["magin-bottom"]}`}>
        <div className={styles.textContainer}>
          <h2>Code difference</h2>
          <p>
            <TextAppear
              text="Here an example of the difference with natural code vs. Wrapping Letters"
              options={{
                SpecialWrapp: {
                  wordToSearch: wordsToSearch,
                  structureToAdd: StrongTag,
                },
                PerWord: true,
              }}
            />
          </p>
          <video>
            <p>A problem hehehe...</p>
          </video>
        </div>
      </section>
    </>
  );
}
