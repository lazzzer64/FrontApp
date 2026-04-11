// components/TextField.tsx
import React from 'react';

interface TextFieldProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    label?: string;
    type?: 'text' | 'email' | 'password' | 'search';
    disabled?: boolean;
    rows?: number;
    cols?: number
}

const TextField: React.FC<TextFieldProps> = ({
                                                 value,
                                                 onChange,
                                                 placeholder = 'Введите текст...',
                                                 label,
                                                 rows = 10,
                                                 cols= 100,
                                                 disabled = false,
                                             }) => {
    return (
        <div className="text-field">
            {label && <label className="text-field__label">{label}</label>}
            <textarea
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                disabled={disabled}
                className="text-field__input"
                rows={rows}
                cols={cols}
            />
        </div>
    );
};

export default TextField;