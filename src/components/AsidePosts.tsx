import Post from "./Post.tsx";
import data from "../../public/Posts.json"

const AsidePosts = () => {
    return (
        <ul className="aside_posts">
            {data.map(post =>
                <Post id={post.id} details={post.details}/>
            )}
        </ul>
    )
}

export default AsidePosts;