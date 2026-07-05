import {useEffect, useState} from "react";

function ArchivePost (){
    const [lines, setLines] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/v1/archive/')
            .then(response => {
                if (!response.ok) throw new Error('Ошибка загрузки');
                console.log("Залупа!");
                return response.text();
            })
            .then(text => {
                const linesArray:string[] = text.split(/\r?\n/);
                setLines(linesArray);
                console.log('Строки файла:', linesArray);
            })
            .catch(error => console.error('Ошибка:', error));
    }, []);

    return (
        <pre>
            {lines.map((line, idx) => (
                <div key={idx}>{line || '— пустая строка —'}</div>
            ))}
        </pre>
    );
}

export default ArchivePost;

