import React from 'react';
import '../css/SaveButton.css'

interface MyButtonProps {
    text: string;
}

class SaveButton extends React.Component<MyButtonProps> {

    handleClick = (text: string) => {
            console.log('Сообщение отправлено: ' + text);
    };

    render() {
        return (
            <button
                className="save-button"
                onClick = {() => this.handleClick(this.props.text)}
            >
                Сохранить
            </button>
        )
    }
}

export default SaveButton;