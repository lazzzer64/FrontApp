import Main from "./Main.tsx";
import Footer from "./Footer.tsx";
import "../css/reset.css";
import "../css/normalize.css";
import "../css/app.css";
import {Header} from "./Header.tsx";
import React from "react";
import {} from "../types/post.tsx"

const App: React.FC = () => {
    return (
        <>
            <Header/>
            <Main/>
            {/*<Footer/>*/}
        </>
    )
}

export default App
