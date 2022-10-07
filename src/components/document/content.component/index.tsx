import TagManager from "./tags";
import { NotFound } from "pages/404";

import styles from "@styles/docs/content.module.scss";

export function Main({
  currentHeader,
  content,
}: {
  currentHeader: PageContent;
  content?: Content;
}) {
  if (!content) return <NotFound />;

  return (
    <main className={styles.main}>
      <div className={styles["content-container"]}>
        <header className={styles.header}>
          <h1>{currentHeader.title}</h1>
          <p>{currentHeader.description}</p>
        </header>
        <section className={styles.content}>
          <h1>xd</h1>
          <TagManager pageData={content} />
        </section>
        <nav className={styles.navigator}>
          <article>prev</article>
          <article>next</article>
        </nav>
      </div>
    </main>
  );
}
