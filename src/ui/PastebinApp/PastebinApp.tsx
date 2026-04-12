import {useState} from 'react';
import TextField from "./TextField.tsx";
import SaveButton from "./SaveButton.tsx";
import '../css/PastebinApp.css';

export function PastebinApp() {
    const [text, setText] = useState('');

    const handleTextChange = (text: string) => {
        setText(text);
    }

    return (
        <main className="main">
            <TextField onChange={handleTextChange}/>
            <SaveButton text={text}/>
        </main>
    )
}