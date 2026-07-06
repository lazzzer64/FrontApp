import React from "react";

import "../styles/app.css";
import "../styles/reset.css";
import "../styles/normalize.css";

import Main from "./layout/main/Main.tsx";
import Footer from "./layout/footer/Footer.tsx";
import Header from "./layout/header/Header.tsx";

const PostbinApp: React.FC = () => {
    return (
        <>
            <Header/>
            <Main/>
            <Footer/>
        </>
    )
}

export default PostbinApp
