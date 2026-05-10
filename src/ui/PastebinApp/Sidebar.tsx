import React, { useState, useEffect } from 'react';
import usePosts from "../../hooks/usePosts.tsx";

const SseList: React.FC = () => {
    const [items, setItems] = useState<string[]>([]);



    useEffect(() => {
        usePosts();


        // Создаём подключение к SSE-потоку
        const eventSource = new EventSource('http://localhost:8080/api/v1/stream');

        // Слушаем событие 'new-item' (имя должно совпадать с тем, что отправляет сервер)
        eventSource.addEventListener('new-item', (event) => {
            const newItem = event.data;
            // Добавляем новую строку в список
            setItems((prevItems) => [...prevItems, newItem]);
        });

        // Обработка ошибок и переподключение (EventSource делает это автоматически при разрыве)
        eventSource.onerror = (err) => {
            console.error('EventSource failed:', err);
            eventSource.close();
        };

        // Очистка при размонтировании компонента
        return () => {
            eventSource.close();
        };
    }, []); // Пустой массив зависимостей — подключаемся один раз при монтировании

    return (
        <div>
            <h2>Real-time список (SSE)</h2>
            {items.length === 0 ? (
                <p>Нет элементов, ожидаем добавления...</p>
            ) : (
                <ul>
                    {items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SseList;