import { ID, PageContent } from "@common/type";

export class DataManager {
  constructor() {}

  async getHeaderByID(
    headers: Record<ID, PageContent>,
    id: string
  ): Promise<PageContent | null> {
    if (!Object.prototype.hasOwnProperty.call(headers, id)) return null;

    return headers[id];
  }
}
