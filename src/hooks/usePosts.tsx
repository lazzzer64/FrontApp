import {useEffect, useRef, useState} from "react";

const usePosts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/tasks')
            .then(res => res.json())
            .then(setPosts)
            .catch(err => console.log('Ошибка', err));
    })

    return {}
}

export default usePosts;