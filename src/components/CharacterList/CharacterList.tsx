import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "queries/characters.ts";
import { generatePath, useNavigate } from "react-router-dom";
import { Character } from "rickmortyapi";
import { CHARACTERS_PAGE_ROUTE } from "router/routes";

export const CharacterList: React.FC<{
    page?: number;
    search?: string;
}> = ({ page = 1, search = "" }) => {
    const { loading, error, data } = useQuery(GET_CHARACTERS, {
        variables: {
            page,
            name: search,
        },
    });
    const navigate = useNavigate();

    if (loading) return <div>Loading...</div>;

    if (error) return <div>Error! {error.message}</div>;

    const totalPages = data?.characters?.info?.pages || 0;

    const updateCurrentPage = (page: number) => {
        navigate(
            generatePath(CHARACTERS_PAGE_ROUTE, { page: page.toString() })
        );
    };

    const handlePagination = (direction: number) => {
        let newPage = page + direction;
        if (newPage < 1) {
            newPage = 1;
        }
        if (newPage > totalPages) {
            newPage = totalPages - 1;
        }

        updateCurrentPage(newPage);
    };

    return (
        <div>
            <div>
                Count: {data?.characters?.results?.length || 0} - Page: {page}
            </div>
            <div>Total pages: {totalPages}</div>
            <br />
            <div>
                {data?.characters?.results?.map((character: Character) => (
                    <div key={character.id}>{character.name}</div>
                ))}
            </div>
            <div>
                <button
                    onClick={() => handlePagination(-1)}
                    disabled={page <= 1}
                >
                    Prev page
                </button>
                <button
                    onClick={() => handlePagination(1)}
                    disabled={page >= totalPages}
                >
                    Next page
                </button>
            </div>
        </div>
    );
};
