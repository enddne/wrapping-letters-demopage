import { useEffect, useState } from "react";
import { ID, PageContent } from "@common/type";
import { GithubAnchor } from "@common/github.link";
import Link from "next/link";

import styles from "@styles/docs/aside.module.scss";

export function Aside({
  currentHeader,
  allHeaders,
}: {
  currentHeader: PageContent;
  allHeaders: Record<ID, Record<ID, PageContent>>;
}) {
  let [isMobile, setIsMobile] = useState(true);
  let entriesArray = Object.entries(allHeaders);

  useEffect(function () {
    let resizing = () => {
      if (window.innerWidth < 1024) setIsMobile(true);
      else setIsMobile(false);
    };

    window.addEventListener("resize", resizing);
    return () => {
      window.removeEventListener("resize", resizing);
    };
  }, []);

  return (
    <>
      {isMobile && <button className={styles["aside-button"]}>xd</button>}
      <aside className={styles.container}>
        <div className={styles.content}>
          {entriesArray.map((el, index) => (
            <div className={styles.stack} key={`${el[0]} ${index}`}>
              <span className={styles["stack-title"]}>{el[0]}</span>
              <div className={styles["stack--items__container"]}>
                {Object.values(el[1]).map((element: PageContent) => (
                  <Link href={`/docs/${element.id}`} key={element.id}>
                    <a>{element.title}</a>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <footer className={styles.footer}>
          <GithubAnchor />
        </footer>
      </aside>
    </>
  );
}
