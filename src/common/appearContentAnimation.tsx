/* global JSX */

import { useRef, useEffect, useState } from "react";

const styles = require("@styles/contentAppear.module.scss");

export function ContentAppear({ children }: { children: JSX.Element | any }) {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef(null);

  function IOCB(entries: IntersectionObserverEntry[]): void {
    if (entries[0].isIntersecting) setIsVisible(true);
    // else setIsVisible(false);
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
    <div
      ref={itemRef}
      className={`${styles["text--container"]} ${
        isVisible ? styles["show--content"] : ""
      }`}
    >
      {children}
    </div>
  );
}
