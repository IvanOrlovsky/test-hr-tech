import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import useAuthStore from "../store/authStore";

const httpLink = createHttpLink({
	uri: "https://api.escuelajs.co/graphql",
});

const authLink = setContext((_, { headers }) => {
	const token = useAuthStore.getState().token;
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : "",
		},
	};
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

export default client;
