import TagManager from "./tags.manager";
import NotFound from "pages/404";

import styles from "@styles/docs/content.module.scss";
import { ContentAppear } from "@common/appearContentAnimation";
import { Nav } from "../nav.component";

export function Main({
  currentHeader,
  content,
  allHeaders,
}: {
  currentHeader: PageContent;
  content?: Content;
  allHeaders?: Record<ID, Record<ID, PageContent>>;
}) {
  if (!content) return <NotFound />;

  return (
    <main className={styles.main}>
      <div className={styles["content-container"]}>
        <header className={styles.header}>
          <ContentAppear>
            <>
              <h1>{currentHeader.title}</h1>
              <p>{currentHeader.description}</p>
            </>
          </ContentAppear>
        </header>
        <section className={styles.content}>
          <TagManager pageData={content} />
        </section>
        <nav className={styles.navigator}>
          <ContentAppear>
            <Nav currentHeader={currentHeader} allHeaders={allHeaders} />
          </ContentAppear>
        </nav>
      </div>
    </main>
  );
}
