import React from 'react';
import '../css/SaveButton.css'

interface MyButtonProps {
    content: string;
}

class SaveButton extends React.Component<MyButtonProps> {

    handleClick = () => {
        console.log('Сообщение отправлено: ' + this.generateFileName());
        this.handleSubmit();
    };

    generateFileName () {
        const timestamp = Date.now();
        const random = Math.random().toString(36).substring(2, 8);
        return `${timestamp}_${random}.txt`;
    }

    async handleSubmit() {
        const content = this.props.content;
        console.log(content);

        const blob = new Blob([content], {type: 'text/plain'});
        const file = new File([blob], this.generateFileName(), {type: 'text/plain'});

        const formData = new FormData();
        formData.append("title", this.generateFileName());
        formData.append("file", file);

        await fetch('http://localhost:8080/api/v1/uploadfile', {
            method: 'POST',
            body: formData
        });
    }

    render() {
        return (
            <button
                className="save-button"
                onClick={() => this.handleClick()}
            >
                Сохранить
            </button>
        )
    }
}

export default SaveButton;