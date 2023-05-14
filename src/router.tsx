import { createBrowserRouter } from "react-router-dom";
import CharactersPage from "./pages/characters";
import CharacterPage from "./pages/character";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <CharactersPage />,
    },
    {
        path: "page/:page",
        element: <CharactersPage />,
    },
    {
        path: "character/:id",
        element: <CharacterPage />,
    },
    {
        path: "*",
        element: <div>404 - Page not found</div>,
    },
]);
