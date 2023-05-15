import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
    query GetCharacters($page: Int!, $name: String) {
        characters(page: $page, filter: { name: $name }) {
            info {
                count
            }
            results {
                ...CharacterFragment
                location {
                    id
                    name
                }
                episode {
                    id
                    name
                }
            }
        }
    }
`;

export const GET_CHARACTER = gql`
    query GetCharacter($id: ID!) {
        character(id: $id) {
            ...CharacterFragment
            origin {
                ...LocationFragment
            }
            location {
                ...LocationFragment
            }
            episode {
                id
                name
                air_date
                episode
                characters {
                    ...CharacterFragment
                }
            }
        }
    }
`;
