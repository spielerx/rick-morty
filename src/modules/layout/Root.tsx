import { Outlet } from "react-router-dom";
import { Header } from "modules/layout/header/Header";
import { Footer } from "modules/layout/footer/Footer";

export const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};
