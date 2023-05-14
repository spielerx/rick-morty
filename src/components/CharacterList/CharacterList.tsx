import { GET_CHARACTERS } from "../../queries/characters";
import { useQuery } from "@apollo/client";

export const CharacterList = () => {
    const { loading, error, data } = useQuery(GET_CHARACTERS, {
        variables: {
            page: 1,
            name: "rick",
        },
        pollInterval: 0,
    });

    if (loading) return <div>Loading...</div>;

    if (error) return <div>Error! {error.message}</div>;

    return <div>{JSON.stringify(data)}</div>;
};
