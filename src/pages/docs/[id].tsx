import { ID, PageContent, Content } from "@common/type";
import { GetStaticPaths, GetStaticProps } from "next";
import { DocumentationTemplate } from "templates/docs";

export default function SearchDocs({
  data,
}: {
  data: { HEADER_JSON: PageContent; CONTENT_JSON: Content };
}) {
  return (
    <DocumentationTemplate
      header={data.HEADER_JSON}
      content={data.CONTENT_JSON}
    />
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${process.env.API}/docs`);
  const posts: Record<ID, PageContent> = await res.json();

  const paths = Object.values(posts).map((post: PageContent) => ({
    params: { id: post.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const HEADER_JSON = new Promise<PageContent>((resolve, reject) => {
    const DATA = fetch(`${process.env.API}/docs/${context.params?.id}`)
      .then((data) => data.json())
      .catch(() => reject("An error in the fetch, internal server error"));

    resolve(DATA);
  });

  const CONTENT_JSON = new Promise<Content>((resolve, reject) => {
    const DATA = fetch(`${process.env.API}/docs/content/${context.params?.id}`)
      .then((data) => data.json())
      .catch(() => reject("An error in the fetch, internal server error"));

    resolve(DATA);
  });

  return { props: { data: { HEADER_JSON, CONTENT_JSON } } };
};
