import { useRef, useEffect, useState } from "react";
import WL from "wrapping-letters-react";

const styles = require("@styles/textAppear.module.scss");

export function TextAppear({
  text,
  options,
}: {
  text: string;
  options: object;
}) {
  function LetterStructure({
    letter,
    cssClass,
  }: {
    letter: string;
    cssClass: string;
  }) {
    const [isVisible, setIsVisible] = useState(false);
    const itemRef = useRef(null);

    function IOCB(entries): void {
      console.log(entries);
    }

    useEffect(
      function () {
        const options = {
          root: null,
          rootMargin: "0px",
          threshold: 1.0,
        };
        const current = itemRef.current;
        const observer = new IntersectionObserver(IOCB, options);

        if (itemRef.current) observer.observe(itemRef.current);

        return () => {
          if (current) observer.observe(current);
        };
      },
      [itemRef]
    );

    return (
      <span ref={itemRef} className={`${cssClass} ${styles.text}`}>
        <span>{letter}</span>
      </span>
    );
  }

  return <WL text={text} textOptions={options} structure={LetterStructure} />;
}
