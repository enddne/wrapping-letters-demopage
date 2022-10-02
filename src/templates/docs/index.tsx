import { Content, ID, PageContent } from "@common/type";
import { GetStaticProps, GetStaticPaths } from "next";
import styles from "@styles/docs/index.module.scss";
import { Aside } from "@components/document/sidebar.component";

export function DocumentationTemplate({
  header,
  allHeaders,
  CONTENT_JSON,
}: {
  header: PageContent;
  allHeaders?: Record<ID, PageContent>;
  CONTENT_JSON?: Content;
}) {
  return (
    <div className={styles.container}>
      <Aside currentHeader={header} allHeaders={allHeaders} />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${process.env.API}/docs/content`);
  const posts: Record<ID, Content> = await res.json();

  const paths = Object.values(posts).map((post: Content) => ({
    params: { id: post.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const allHeaders = fetch(`${process.env.API}/docs/`).then((data) =>
    data.json()
  );

  const CONTENT_JSON = fetch(
    `${process.env.API}/docs/content/${context.params?.id}`
  ).then((data) => data.json());

  return { props: { allHeaders, CONTENT_JSON } };
};
