import './App.css'
import {Main} from "./ui/Main.tsx";
import {Header} from "./ui/Header.tsx";
import {Sidebar} from "./ui/Sidebar.tsx";
import {Footer} from "./ui/Footer.tsx";


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
