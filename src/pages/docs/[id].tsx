import { ID, PageContent } from "@common/type";
import { GetStaticPaths, GetStaticProps } from "next";
import { DocumentationTemplate } from "templates/docs";

export default function SearchDocs({
  HEADER_JSON,
}: {
  HEADER_JSON: PageContent;
}) {
  return <DocumentationTemplate header={HEADER_JSON} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${process.env.API}/docs`);
  const posts: Record<ID, Record<ID, PageContent>> = await res.json();

  const paths = Object.values(posts)
    .map((e) => Object.values(e))
    .flat()
    .map((post: PageContent) => ({
      params: { id: post.id },
    }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const HEADER_JSON = await fetch(`${process.env.API}/docs/${params?.id}`).then(
    (data) => data.json()
  );

  return { props: { HEADER_JSON } };
};
