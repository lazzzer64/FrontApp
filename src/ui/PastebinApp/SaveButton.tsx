import React from 'react';
import '../css/SaveButton.css'

interface SaveButtonProps {
    onClick?: () => void;
}

const SaveButton: React.FC<SaveButtonProps> = ({

}) => {
    return (
        <button className="save-button">Сохранить</button>
    )
}

export default SaveButton;