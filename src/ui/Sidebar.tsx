import {useState} from 'react';
import './css/Sidebar.css';

export function Sidebar() {

    const [position, setPosition] = useState('left'); // 'left' или 'right'

    const togglePosition = () => {
        setPosition(prev => prev === 'left' ? 'right' : 'left');
    };

    return (
        <>
            <button onClick={togglePosition}>
                Переключить на {position === 'left' ? 'правую' : 'левую'} сторону
            </button>

            <div className={`sidebar ${position}`}>
                <div className="sidebar-content">
                    <h3>Меню</h3>
                    <ul>
                        <li>Главная</li>
                        <li>О нас</li>
                        <li>Контакты</li>
                    </ul>
                </div>
            </div>

            <div className={`main-content ${position}`}>
                <h1>Основной контент</h1>
                <p>Контент страницы...</p>
            </div>
        </>
    );
};

export default Sidebar;