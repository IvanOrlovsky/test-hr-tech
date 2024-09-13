"use client";

import { ApolloProvider } from "@apollo/client";
import client from "@/lib/apolloClient";
import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

const ClientWrapper = ({ children }: Props) => {
	return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ClientWrapper;
