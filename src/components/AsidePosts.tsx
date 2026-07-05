import Post from "./Post.tsx";
import {useEffect, useState} from "react";

const AsidePosts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/posts")
            .then((res: Response) => res.json())
            .then(setPosts)
    }, [])

    return (
        <ul className="aside_posts">
            {posts.map(({content, details, id, title}: never) =>
                <Post key={id} id={id} details={details} title={title} content={content}/>
            )}
        </ul>
    )
}

export default AsidePosts;