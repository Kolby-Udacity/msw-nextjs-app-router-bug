import { graphql } from "msw";

import { mockPrograms } from "./mock-data/fetch-programs";

export const handlers = [
  graphql.query("FetchPrograms", (req, res, ctx) => {
    return res(ctx.data({ programs: mockPrograms }));
  }),
];
