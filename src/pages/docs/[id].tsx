import { useRouter } from "next/router";

import { DataManager as Dm } from "@DDBB/index";
import { ID, PageContent } from "@common/type";
import { GetServerSideProps } from "next";

export default function SearchDocs({
  data,
}: {
  data: Record<ID, PageContent>;
}) {
  const { id = "" } = useRouter().query;

  const DataManager = new Dm();

  return DataManager.getHeaderByID(data, id as string);
}

export async function getServerSideProps(): Promise<GetServerSideProps> {
  // Fetch data from external API
  const res = await fetch(`${process.env.API}/docs/`);

  const data = await res.json().catch(console.log);

  // Pass data to the page via props
  return data;
}
