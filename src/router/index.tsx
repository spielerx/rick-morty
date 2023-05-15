import { createBrowserRouter } from "react-router-dom";
import CharactersPage from "pages/characters";
import CharacterPage from "pages/character";
import { CHARACTERS_PAGE_ROUTE, CHARACTER_PAGE_ROUTE } from "./routes";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <CharactersPage />,
    },
    {
        path: CHARACTERS_PAGE_ROUTE,
        element: <CharactersPage />,
    },
    {
        path: CHARACTER_PAGE_ROUTE,
        element: <CharacterPage />,
    },
    {
        path: "*",
        element: <div>404 - Page not found</div>,
    },
]);
