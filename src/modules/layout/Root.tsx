import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "modules/layout/header/Header";
import { Footer } from "modules/layout/footer/Footer";
import { Loader } from "modules/common/Loader/Loader";

export const Layout = () => {
    return (
        <>
            <Header />
            <div className="main">
                <React.Suspense fallback={<Loader />}>
                    <Outlet />
                </React.Suspense>
            </div>
            <Footer />
        </>
    );
};
