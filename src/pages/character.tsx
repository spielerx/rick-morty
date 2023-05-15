import { CharacterInformation } from "modules/character/CharacterInformation/CharacterInformation";
import { Navigate, useParams } from "react-router-dom";

const CharacterPage = () => {
    const { id } = useParams();

    const characterId = parseInt(id + "");
    if (!characterId) {
        return <Navigate to="/" state={{ from: location }} />;
    }

    return <CharacterInformation id={+characterId} />;
};

export default CharacterPage;
