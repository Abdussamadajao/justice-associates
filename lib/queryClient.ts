import { QueryClient } from "@tanstack/react-query";

let queryClientInstance: QueryClient | null = null;

export const setQueryClient = (client: QueryClient) => {
  queryClientInstance = client;
};

export const getQueryClient = () => {
  if (!queryClientInstance) {
    console.warn("QueryClient not initialized yet");
  }
  return queryClientInstance;
};

export const clearQueryCache = () => {
  const client = getQueryClient();
  if (client) {
    client.clear();
  }
};
