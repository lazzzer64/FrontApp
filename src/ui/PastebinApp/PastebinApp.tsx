// import React from 'react';
import TextField from "./TextField.tsx";
import SaveButton from "./SaveButton.tsx";
import '../css/PastebinApp.css';

export function PastebinApp() {
    return (
        <main className="main">
            <TextField />
            <SaveButton />
        </main>
    )
}