import { useEffect, useState } from "react";
import { Character, getCharacter } from "rickmortyapi";

export const useCharacter = (id: number) => {
    const [data, setData] = useState<Character>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error>();

    useEffect(() => {
        setLoading(true);
        getCharacter(id)
            .then((response) => {
                if (response.status === 200) {
                    setData(response.data);
                } else {
                    setError(new Error(response.statusMessage));
                }
            })
            .catch(setError);
        setLoading(false);
    }, [id]);

    return {
        data,
        loading,
        error,
    };
};
