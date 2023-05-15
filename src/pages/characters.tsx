import {
    generatePath,
    useNavigate,
    useParams,
    useSearchParams,
} from "react-router-dom";
import { CharacterList } from "modules/character/CharacterList/CharacterList";
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
            page={pageNumber}
            onPageChange={updateCurrentPage}
            search={searchParams.get("search")}
        />
    );
};

export default CharactersPage;
