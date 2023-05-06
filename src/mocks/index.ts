import { setupServer } from "msw/node";

import { handlers } from "./handlers";

export async function initServerMocks() {
  const server = setupServer(...handlers);
  server.listen({ onUnhandledRequest: "error" });
}
