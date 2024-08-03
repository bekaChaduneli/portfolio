"use client";

import client from "@/utils/apolloClient";
import { ApolloProvider } from "@apollo/client";

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
