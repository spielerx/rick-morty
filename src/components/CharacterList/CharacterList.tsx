import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "queries/characters.ts";

export const CharacterList: React.FC<{ page: number; search?: string }> = ({
    page = 1,
    search = "rich",
}) => {
    const { loading, error, data } = useQuery(GET_CHARACTERS, {
        variables: {
            page,
            name: search,
        },
        pollInterval: 0,
    });

    if (loading) return <div>Loading...</div>;

    if (error) return <div>Error! {error.message}</div>;

    return (
        <div>
            <div>
                Count: {data?.characters?.results?.length || 0} - Page: {page}
            </div>
            <div>{JSON.stringify(data)}</div>
        </div>
    );
};
