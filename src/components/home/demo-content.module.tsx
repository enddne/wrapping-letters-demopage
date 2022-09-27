import WL from "wrapping-letters-react";
import { ContentAppear } from "@common/appearContentAnimation";

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
          <ContentAppear>
            <h2>What does Wrapping Letters do?</h2>
          </ContentAppear>
          <ContentAppear>
            <p>
              <WL
                text="Wrapping Letters wrap for you the text in your code editor, simplify the task to animate in very few code lines"
                textOptions={{
                  SpecialWrapp: {
                    wordToSearch: wordsToSearch,
                    structureToAdd: StrongTag,
                  },
                  PerWord: true,
                }}
              />
            </p>
          </ContentAppear>
        </div>
      </section>
      <section className={`${styles.textToRigth} ${styles["magin-bottom"]}`}>
        <div className={styles.textContainer}>
          <ContentAppear>
            <h2>How does Wrapping Letters do?</h2>
          </ContentAppear>
          <ContentAppear>
            <p>
              <WL
                text='Wrapping Letters search for the words through an iteration that returns a "list" of JSX elements that you can manipulate as you please'
                textOptions={{
                  SpecialWrapp: {
                    wordToSearch: wordsToSearch,
                    structureToAdd: StrongTag,
                  },
                  PerWord: true,
                }}
              />
            </p>
          </ContentAppear>
        </div>
      </section>
      <section className={`${styles.textToLeft} ${styles["magin-bottom"]}`}>
        <div className={styles.textContainer}>
          <ContentAppear>
            <h2>Code difference</h2>
          </ContentAppear>
          <ContentAppear>
            <p>
              <WL
                text="Here an example of the difference with natural code vs. Wrapping Letters"
                textOptions={{
                  SpecialWrapp: {
                    wordToSearch: wordsToSearch,
                    structureToAdd: StrongTag,
                  },
                  PerWord: true,
                }}
              />
            </p>
          </ContentAppear>
          <ContentAppear>
            <video>
              <p>A problem hehehe...</p>
            </video>
          </ContentAppear>
        </div>
      </section>
    </>
  );
}
