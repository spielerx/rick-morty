import { createBrowserRouter } from "react-router-dom";
import CharactersPage from "pages/characters";
import CharacterPage from "pages/character";
import { CHARACTERS_PAGE_ROUTE, CHARACTER_PAGE_ROUTE } from "./routes";
import { Layout } from "modules/layout/Root";
import ErrorPage from "pages/error";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
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
        ],
    },
]);
