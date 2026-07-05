import {useState} from 'react';
import TextField from "./TextField.tsx";
import SaveButton from "./SaveButton.tsx";
import '../css/PastebinApp.css';
import Sidebar from "./Sidebar.tsx";

function PastebinApp() {
    const [text, setText] = useState('');

    const handleTextChange = (text: string) => {
        setText(text);
    }

    return (
        <main className="main">
            <div className="content">
                <TextField onChange={handleTextChange}/>
                <SaveButton content={text}/>
            </div>
            <aside>
                <Sidebar/>
            </aside>
        </main>
    )
}

export default PastebinApp