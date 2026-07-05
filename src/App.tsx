import './App.css'
import PastebinApp from "./ui/PastebinApp/PastebinApp.tsx";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

    return (
        <BrowserRouter>
            <Link to="/pastebin">Pastebin</Link>
            <Routes>
                <Route path="/pastebin" element={<PastebinApp />} />
                <Route path="/xyu" element={<PastebinApp />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
