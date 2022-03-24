// Apollo Settings
import {
    ApolloClient,
    ApolloLink,
    ApolloProvider,
    InMemoryCache,
} from '@apollo/client/';
import { createHttpLink } from 'apollo-link-http';

const graphqlEndpoint = 'https://rickandmortyapi.com/graphql';

const client = new ApolloClient({
    link: ApolloLink.from([
        createHttpLink({ uri: graphqlEndpoint }),
    ]),
    cache: new InMemoryCache(),
});

const ApolloAppProvider = ({ children }) => (
    <ApolloProvider client={client}>{children}</ApolloProvider>
);

export default ApolloAppProvider;
