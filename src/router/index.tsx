import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { CHARACTERS_PAGE_ROUTE, CHARACTER_PAGE_ROUTE } from "./routes";
import { Layout } from "modules/layout/Root";
import ErrorPage from "pages/error";

const CharactersPage = React.lazy(() => import("pages/characters"));
const CharacterPage = React.lazy(() => import("pages/character"));

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
