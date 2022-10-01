import { ID, PageContent } from "@common/type";
import { GetStaticPaths, GetStaticProps } from "next";

export default function SearchDocs({ data }: { data: PageContent }) {
  return (
    <>
      <span>{data?.title}</span> | <span>{data?.description}</span>
    </>
  );
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   const res = await fetch(`${process.env.API}/docs`);
//   const posts: Record<ID, PageContent> = await res.json();

//   const paths = Object.values(posts).map((post: PageContent) => ({
//     params: { id: post.id },
//   }));

//   return { paths, fallback: false };
// };

// export const getStaticProps: GetStaticProps = async (context) => {
//   const res = await fetch(`${process.env.API}/docs/${context.params?.id}`);

//   const data = await res.json();

//   return { props: { data } };
// };
