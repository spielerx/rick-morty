import { CharacterFile } from "modules/character/CharacterFile/CharacterFile";
import { Navigate, useParams } from "react-router-dom";

const CharacterPage = () => {
    const { id } = useParams();

    const characterId = parseInt(id + "");
    if (!characterId) {
        return <Navigate to="/" state={{ from: location }} />;
    }

    return <CharacterFile id={+characterId} />;
};

export default CharacterPage;
