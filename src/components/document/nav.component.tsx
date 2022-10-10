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
  console.log(headerValues, currentHeader, currentHeaderIndex, filterElement);

  const nextPost = headerValues[currentHeaderIndex + 1];
  const previusPost = !(headerValues.length - 1 > 0)
    ? headerValues[currentHeaderIndex - 1]
    : headerValues[headerValues.length - 1];

  return (
    <section className={styles.container}>
      <Link href={`/docs/${nextPost.id}`}>
        <a className={styles["doc-container"]}>
          <article>
            <h1>{nextPost.title}</h1>
          </article>
        </a>
      </Link>
      <Link href={`/docs/${previusPost.id}`}>
        <a className={styles["doc-container"]}>
          <article>
            <h1>{previusPost.title}</h1>
          </article>
        </a>
      </Link>
    </section>
  );
}
