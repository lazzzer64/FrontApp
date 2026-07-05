import React from "react";

import "../css/app.css";
import "../css/reset.css";
import "../css/normalize.css";

import Main from "./Main.tsx";
import Footer from "./Footer.tsx";
import Header from "./Header.tsx";

const App: React.FC = () => {
    return (
        <>
            <Header/>
            <Main/>
            <Footer/>
        </>
    )
}

export default App
