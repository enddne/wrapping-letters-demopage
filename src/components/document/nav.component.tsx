import Link from "next/link";
import styles from "@styles/docs/nav.module.scss";

export function Nav({
  allHeaders,
  currentHeader,
}: {
  currentHeader: PageContent;
  allHeaders: Record<ID, Record<ID, PageContent>>;
}) {
  const headerValuesMain = Object.values(allHeaders);
  const headerValues = headerValuesMain.map((el) => Object.values(el)).flat();
  const filterElement = headerValues.find((el) => el.id === currentHeader.id);

  const currentHeaderIndex = headerValues.indexOf(filterElement as PageContent);

  const nextPost =
    currentHeaderIndex + 1 > headerValues.length - 1
      ? headerValues[0]
      : headerValues[currentHeaderIndex + 1];

  const previousPost =
    currentHeaderIndex - 1 >= 0
      ? headerValues[currentHeaderIndex - 1]
      : headerValues[headerValues.length - 1];

  return (
    <section className={styles.container}>
      <p>Take a look the next docs</p>
      <div className={styles["content"]}>
        <div className={styles["link-container"]}>
          <Link href={`/docs/${previousPost.id}`}>
            <a className={styles["doc-container"]}>
              <article>
                <span>previous</span>
                <h1>{previousPost.title}</h1>
              </article>
            </a>
          </Link>
        </div>
        <div className={styles["link-container"]}>
          <Link href={`/docs/${nextPost.id}`}>
            <a className={styles["doc-container"]}>
              <article>
                <span>next</span>
                <h1>{nextPost.title}</h1>
              </article>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
