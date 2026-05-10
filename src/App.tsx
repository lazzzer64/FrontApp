import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";
import "./css/reset.css"
import "./css/normalize.css"
import "./css/app.css"
import {Header} from "./components/Header.tsx"
    ;

const App = () => {
    return (
        <>
            <Header/>
            <Main/>
            <Footer/>
        </>
    )
}

export default App
