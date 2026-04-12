import '../css/TextArea.css'

interface TextFieldProps {
    placeholder?: string;
    type?: 'text' | 'email' | 'password' | 'search';
    disabled?: boolean;
    style?: string;
    rows?: number;
    cols?: number
}

const TextField: React.FC<TextFieldProps> = ({
                                                 placeholder = 'Введите текст...',
                                                 rows = 30,
                                                 cols = 150,
                                                 disabled = false,
                                             }) => {
    return (
        <textarea
            className="no-resize"
            placeholder={placeholder}
            disabled={disabled}
            rows={rows}
            cols={cols}


        />
    );
};

export default TextField;