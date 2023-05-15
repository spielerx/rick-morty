import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "queries/characters.ts";
import { Link } from "react-router-dom";
import { Character } from "rickmortyapi";
import { CharacterCard } from "modules/character/CharacterCard/CharacterCard";
import { Button } from "modules/common/Button/Button";
import { ReactComponent as ArrowLeft } from "assets/icons/arrow-left.svg";
import { ReactComponent as ArrowRight } from "assets/icons/arrow-right.svg";
import styles from "./CharacterList.module.scss";

export const CharacterList: React.FC<{
    page?: number;
    search?: string | null;
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

    const handleNavigation = (direction: number) => {
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
        <div className={styles.characterList}>
            <div className="row">
                {data?.characters?.results?.map((character: Character) => (
                    <div
                        key={character.id}
                        className="col-12 col-xs-6 col-sm-4 col-md-3 col-xxl-2"
                    >
                        <Link to={`/character/${character.id}`}>
                            <CharacterCard character={character} />
                        </Link>
                    </div>
                ))}
            </div>
            <div className={styles.navigation}>
                <Button
                    onClick={() => handleNavigation(-1)}
                    disabled={page <= 1}
                >
                    <ArrowLeft />
                    Prev page
                </Button>

                <div className={styles.stats}>
                    <div>
                        Count: {data?.characters?.results?.length || 0} - Page:
                        {page}
                    </div>
                    <div>Total pages: {totalPages}</div>
                </div>

                <Button
                    onClick={() => handleNavigation(1)}
                    disabled={page >= totalPages}
                >
                    Next page
                    <ArrowRight />
                </Button>
            </div>
        </div>
    );
};
