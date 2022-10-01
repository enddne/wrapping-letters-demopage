import { Content, ID, PageContent } from "@common/type";
import { GetStaticProps } from "next";
import styles from "@styles/docs/index.module.scss";
import { Aside } from "@components/document/sidebar.component";

export function DocumentationTemplate({
  header,
  content,
  allHeaders,
}: {
  header: PageContent;
  content: Content;
  allHeaders?: Record<ID, PageContent>;
}) {
  return (
    <div className={styles.container}>
      <Aside currentHeader={header} allHeaders={allHeaders} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allHeaders = new Promise((resolve, rejects) => {
    const DATA = fetch(`${process.env.API}/docs/`)
      .then((data) => data.json())
      .catch(() => rejects("An error in the fetch, internal server error"));

    resolve(DATA);
  });

  return { props: { allHeaders } };
};
