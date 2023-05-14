import { CharacterList } from "components/CharacterList/CharacterList";
import { useParams } from "react-router-dom";

const CharactersPage = () => {
    const { page } = useParams();

    const pageNumber = page ? parseInt(page) : 1;

    return <CharacterList page={pageNumber} />;
};

export default CharactersPage;
