import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "queries/characters.ts";
import { Character } from "rickmortyapi";

export const CharacterList: React.FC<{
    page?: number;
    search?: string;
    onPageChange?: (page: number) => void;
}> = ({ page = 1, search = "", onPageChange }) => {
    const { loading, error, data } = useQuery(GET_CHARACTERS, {
        variables: {
            page,
            name: search,
        },
    });

    if (loading) return <div>Loading...</div>;

    if (error) return <div>Error! {error.message}</div>;

    const totalPages = data?.characters?.info?.pages || 0;

    const handlePagination = (direction: number) => {
        let newPage = page + direction;
        if (newPage < 1) {
            newPage = 1;
        }
        if (newPage > totalPages) {
            newPage = totalPages - 1;
        }

        onPageChange && onPageChange(newPage);
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
