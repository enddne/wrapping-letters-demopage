import { PageData } from "@DDBB/pageData.ddbb";
import { NextApiRequest, NextApiResponse } from "next";
import { DynamicApiRoute } from "@modules/dynamicApi.module";

const API = async (req: NextApiRequest, res: NextApiResponse) =>
  DynamicApiRoute(req, res, PageData);

export default API;
