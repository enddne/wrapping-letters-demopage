import { Data } from "@DDBB/headerData.ddbb";
import { NextApiRequest, NextApiResponse } from "next";
import { DynamicApiRoute } from "@modules/dynamicApi.module";

const API = async (req: NextApiRequest, res: NextApiResponse) => {
  const values = Object.values(Data)
    .map((e) => Object.entries(e))
    .flat();

  const DATA: Record<string, PageContent> = Object.fromEntries(values);

  return DynamicApiRoute(req, res, DATA);
};

export default API;
