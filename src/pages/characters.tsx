import { CharacterList } from "components/CharacterList/CharacterList";
import { generatePath, useNavigate, useParams } from "react-router-dom";
import { CHARACTERS_PAGE_ROUTE } from "router/routes";

const CharactersPage = () => {
    const { page } = useParams();
    const navigate = useNavigate();

    const pageNumber = page ? parseInt(page) : 1;

    const updateCurrentPage = (page: number) => {
        navigate(
            generatePath(CHARACTERS_PAGE_ROUTE, { page: page.toString() })
        );
    };

    return <CharacterList page={pageNumber} onPageChange={updateCurrentPage} />;
};

export default CharactersPage;
