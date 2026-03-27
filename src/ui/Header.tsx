import './css/Header.css';
import './css/Search.css';
import {useEffect, useState} from "react";

export function Header() {
    const [placeholder, setPlaceholder] = useState('');

    const samplesOfSearch = [
        '🔍 Поиск', '🔍 Почта', '🔍 Никнейм', '🔍 Номер карты'
    ];

    let index = 0;

    useEffect(() => {
        setPlaceholder(samplesOfSearch[0]);
        const interval = setInterval(() => {
            setPlaceholder(samplesOfSearch[index % samplesOfSearch.length]);
            index++;
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <header className="header">
            <button className="profile-button">&#128100;</button>

            <input
                type="text"
                placeholder={placeholder}
                className="search-input"
            />

            <button className="cta-button">Связаться</button>
        </header>
    );
}