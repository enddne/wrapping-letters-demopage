import { GetStaticPaths, GetStaticProps } from "next";
import { DocumentationTemplate } from "templates/docs";

export default function SearchDocs({
  HEADER_JSON,
  allHeaders,
  CONTENT_JSON,
}: {
  HEADER_JSON: PageContent;
  allHeaders?: Record<ID, PageContent>;
  CONTENT_JSON?: Content;
}) {
  return (
    <DocumentationTemplate
      header={HEADER_JSON}
      allHeaders={allHeaders}
      CONTENT_JSON={CONTENT_JSON}
    />
  );
}
/*
export const getStaticPaths: GetStaticPaths = async () => {
  const generalRes = await fetch(`${process.env.API}/docs`);
  const contentRes = await fetch(`${process.env.API}/docs/content/`);

  const headersPosts: Record<
    ID,
    Record<ID, PageContent>
  > = await generalRes.json();

  const contentPost: Record<ID, Content> = await contentRes.json();

  const headersPaths = Object.values(headersPosts)
    .map((e) => Object.values(e))
    .flat()
    .map((post: PageContent) => ({
      params: { id: post.id },
    }));

  const contentPaths = Object.values(contentPost).map((post: Content) => ({
    params: { id: post.id },
  }));

  return {
    paths: [...headersPaths, ...contentPaths],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const HEADER_JSON = await fetch(`${process.env.API}/docs/${params?.id}`).then(
    (data) => data.json()
  );

  const allHeaders = await fetch(`${process.env.API}/docs`).then((data) =>
    data.json()
  );

  const CONTENT_JSON = await fetch(
    `${process.env.API}/docs/content/${params?.id}`
  ).then((data) => data.json());

  return { props: { HEADER_JSON, allHeaders, CONTENT_JSON } };
};
*/
