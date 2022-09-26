import { useRef, useEffect, useState } from "react";
import WL from "wrapping-letters-react";

const styles = require("@styles/textAppear.module.scss");

export function TextAppear({
  className,
  text,
  options = {},
}: {
  className?: string;
  text: string;
  options: object;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef(null);

  function IOCB(entries: IntersectionObserverEntry[]): void {
    if (entries[0].isIntersecting) setIsVisible(true);
    // else setIsVisible(false);
  }

  function Structure({
    letter,
    specialWrapp,
    index,
  }: {
    letter: string;
    cssClass: string;
    specialWrapp: {
      // eslint-disable-next-line no-undef
      NewWrappStructure: Function | undefined;
      hasCustomWrapp: boolean;
    };
    index: number;
  }) {
    type Props = { letter: string };

    const { NewWrappStructure, hasCustomWrapp } = specialWrapp;

    let Default = (props: Props) => {
      return (
        <span className={`${styles["text-box"]}`}>
          <span style={{ transitionDelay: `${index * 10}ms` }}>
            {props.letter}
          </span>
        </span>
      );
    };

    let Custom = (props: Props) => {
      return (
        <span className={styles["text-box"]}>
          {NewWrappStructure && (
            <NewWrappStructure
              letter={props.letter}
              cssStyle={{ transitionDelay: `${index * 10}ms` }}
            />
          )}
        </span>
      );
    };

    return hasCustomWrapp ? (
      <Custom letter={letter} />
    ) : (
      <Default letter={letter} />
    );
  }

  useEffect(
    function () {
      const option = {
        root: null,
        rootMargin: "0px",
        threshold: 0.8,
      };
      const current = itemRef.current;
      const observer = new IntersectionObserver(IOCB, option);

      if (itemRef.current) observer.observe(itemRef.current);

      return () => {
        if (current) observer.observe(current);
      };
    },
    [itemRef]
  );

  return (
    <span
      ref={itemRef}
      className={`${styles.text}${isVisible ? ` ${styles["show--text"]}` : ""}${
        className ? ` ${className}` : ""
      }`}
    >
      <WL text={text} textOptions={options} structure={Structure} />
    </span>
  );
}
