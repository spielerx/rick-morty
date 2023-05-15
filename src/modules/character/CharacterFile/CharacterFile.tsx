import { useQuery } from "@apollo/client";
import { GET_CHARACTER } from "queries/characters";
import styles from "./CharacterFile.module.scss";

export const Character: React.FC<{ id: number }> = ({ id }) => {
    const {
        loading,
        error,
        data: { character } = {},
    } = useQuery(GET_CHARACTER, {
        variables: {
            id,
        },
    });

    if (loading) return <div>Loading...</div>;

    if (error) return <div>Error! {error.message}</div>;

    return (
        <div className={styles.characterFile}>
            Character name: {character?.name}
        </div>
    );
};
