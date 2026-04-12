import '../css/TextArea.css'
import React from "react";

interface TextFieldProps {
    placeholder?: string;
    type?: 'text' | 'email' | 'password' | 'search';
    disabled?: boolean;
    style?: string;
    rows?: number;
    cols?: number;
    onChange: (text: string) => void;
}

const TextField: React.FC<TextFieldProps> = ({
                                                 placeholder = 'Введите текст...',
                                                 rows = 30,
                                                 cols = 150,
                                                 disabled = false,
                                                 onChange,
                                             }) => {

    const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange(event.target.value);
    }

    return (
        <textarea
            className="no-resize"
            placeholder={placeholder}
            onChange={handleTextChange}
            disabled={disabled}
            rows={rows}
            cols={cols}
        />
    );
};

export default TextField;