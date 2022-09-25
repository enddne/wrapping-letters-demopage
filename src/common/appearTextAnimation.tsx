import { useRef, useEffect, useState } from "react";
import WL from "wrapping-letters-react";

const styles = require("@styles/textAppear.module.scss");

export function TextAppear({
  className,
  text,
  options,
}: {
  className?: string;
  text: string;
  options: object;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef(null);

  function IOCB(entries: IntersectionObserverEntry[]): void {
    if (entries[0].isIntersecting) setIsVisible(true);
  }

  function Structure({
    letter,
    cssClass,
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
    type Props = { letter: string; cssClass: string };

    const { NewWrappStructure, hasCustomWrapp } = specialWrapp;

    let Default = (props: Props) => {
      let cssName = props.cssClass ? { className: props.cssClass } : {};

      return (
        <span
          className={styles["text-box"]}
          style={{ transitionDelay: `${50 * index}ms` }}
        >
          <span {...cssName}>{props.letter}</span>
        </span>
      );
    };

    let Custom = (props: Props) => {
      return (
        <span
          className={styles["text-box"]}
          style={{ transitionDelay: `${50 * index}ms` }}
        >
          {NewWrappStructure && (
            <NewWrappStructure
              letter={props.letter}
              cssClass={props.cssClass}
            />
          )}
        </span>
      );
    };

    return hasCustomWrapp ? (
      <Custom letter={letter} cssClass={cssClass} />
    ) : (
      <Default letter={letter} cssClass={cssClass} />
    );
  }

  useEffect(
    function () {
      const option = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
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
