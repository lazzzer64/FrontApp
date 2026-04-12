import React from 'react';
import '../css/SaveButton.css'

interface SaveButtonProps {
    onClick?: () => void;
}

const SaveButton: React.FC<SaveButtonProps> = () => {


    return (
        <button className="save-button" onClick={handleSubmit}>Сохранить</button>
    )
}

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/v1/saveText', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({data: 'value'})
    });

    const result = await response.json();
    console.log(result);
};

export default SaveButton;