import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { createFragmentRegistry } from "@apollo/client/cache";

export const client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql",
    cache: new InMemoryCache({
        fragments: createFragmentRegistry(gql`
            fragment CharacterFragment on Character {
                id
                name
                status
                species
                type
                gender
                image
                created
            }

            fragment LocationFragment on Location {
                id
                name
                type
                dimension
                residents {
                    ...CharacterFragment
                }
            }
        `),
    }),
});
