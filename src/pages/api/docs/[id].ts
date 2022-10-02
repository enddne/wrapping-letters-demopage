import { Data } from "@DDBB/headerData.ddbb";
import { NextApiRequest, NextApiResponse } from "next";
import { DynamicApiRoute } from "@modules/dynamicApi.module";
import { PageContent } from "@common/type";

const API = async (req: NextApiRequest, res: NextApiResponse) => {
  let values = Object.values(Data)
    .map((e) => Object.entries(e))
    .flat();

  let DATA: Record<string, PageContent> = Object.fromEntries(values);

  return DynamicApiRoute(req, res, DATA);
};

export default API;
