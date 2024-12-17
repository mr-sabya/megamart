import {
    isRouteErrorResponse,
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useRouteError,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";
import "~/style/style.css"

import Header from "./components/header/Header";
import TopHeader from "./components/top-header/TopHeader";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";

import { CartProvider } from "./context/CartContext";
import SideCart from "./components/sidecart/SideCart";

export const links: LinksFunction = () => [

    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
    },
    {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
    },
];

export function ErrorBoundary() {
    const error = useRouteError();
    return (
        <div>
            <h1>
                {isRouteErrorResponse(error)
                    ? `${error.status} ${error.statusText}`
                    : error instanceof Error
                        ? error.message
                        : "Unknown Error"}
            </h1>
        </div>
    );
}


export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <Meta />
                <Links />
            </head>
            <body>

                <CartProvider>
                    <TopHeader />
                    <Header />
                    <Menu />
                    <SideCart />
                </CartProvider>


                {children}
                <Footer />
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export default function App() {
    return <Outlet />;
}
