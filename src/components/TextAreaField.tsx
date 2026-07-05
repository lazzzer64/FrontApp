interface TextAreaFieldProps {
    value: string;
    onChange: (val: string) => void;
}

const TextAreaField = ({value, onChange}: TextAreaFieldProps) => {
    return (
        <textarea
            className="postformtext"
            id="postform-text"
            placeholder="Содержание поста"
            autoComplete="off"
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    )
}

export default TextAreaField