const TextAreaField = () => {
    return (
        <div className="textareafield">
            <label
            className="field__label"
            htmlFor="new-task">
                NewTask
            </label>
            <textarea
            className="field__input"
            id="new-task"
            placeholder="New Task"
            autoComplete="off"
            />
        </div>
    )
}

export default TextAreaField