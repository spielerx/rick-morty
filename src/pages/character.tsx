import { Character } from "modules/character/Character";
import { Navigate, useParams } from "react-router-dom";

const CharacterPage = () => {
    const { id } = useParams();

    const characterId = parseInt(id + "");
    if (!characterId) {
        return <Navigate to="/" state={{ from: location }} />;
    }

    return <Character id={+characterId} />;
};

export default CharacterPage;
