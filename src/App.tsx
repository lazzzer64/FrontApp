import './App.css'
import {Sidebar} from "./ui/Sidebar.tsx";
import {Header} from "./ui/Header.tsx";
import {Footer} from "./ui/Footer.tsx";
import {Main} from "./ui/Main.tsx";


function App() {

    return (
        <div>
            <Header/>
            <Main/>
            <Sidebar/>
            <Footer/>
        </div>
    )
}

export default App
