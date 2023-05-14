import { useCharacter } from "./hooks/useCharacter";

export const Character: React.FC<{ id: number }> = ({ id }) => {
    const { data, loading, error } = useCharacter(id);

    if (loading) return <div>Loading...</div>;

    if (error) return <div>Error! {error.message}</div>;

    return <div>Character name: {data?.name}</div>;
};
