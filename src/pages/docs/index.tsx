import { GetStaticProps } from "next";

export default function GettingStarted({ DATA }) {
  console.log(
    Object.values(DATA)
      .map((e) => Object.values(e))
      .flat()
  );
  return "a";
}

export const getStaticProps: GetStaticProps = async () => {
  const DATA = await fetch(`${process.env.API}/docs`).then((data) =>
    data.json()
  );

  return { props: { DATA } };
};
