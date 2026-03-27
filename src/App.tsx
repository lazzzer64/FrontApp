import './App.css'
import {Header} from "./ui/Header.tsx";
import Footer from "./ui/Footer.tsx";
import {Main} from "./ui/Main.tsx";

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

    return (
        <div>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}

export default App
