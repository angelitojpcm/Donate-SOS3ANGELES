import { createApiBase } from "./api-base";

export const createServerApi = ({ session, headers } = {}) => {
  return createApiBase({
    session,
    headers,
    isServer: true,
  });
};
