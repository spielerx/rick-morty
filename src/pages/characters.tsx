import { CharacterList } from "modules/character/CharacterList/CharacterList";
import {
    generatePath,
    useNavigate,
    useParams,
    useSearchParams,
} from "react-router-dom";
import { CHARACTERS_PAGE_ROUTE } from "router/routes";

const CharactersPage = () => {
    const { page } = useParams();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const pageNumber = page ? parseInt(page) : 1;

    const updateCurrentPage = (page: number) => {
        const pageUrl = generatePath(CHARACTERS_PAGE_ROUTE, {
            page: page.toString(),
        });
        navigate(`${pageUrl}?${searchParams.toString()}`);
    };

    return (
        <CharacterList
            search={searchParams.get("search")}
            page={pageNumber}
            onPageChange={updateCurrentPage}
        />
    );
};

export default CharactersPage;
