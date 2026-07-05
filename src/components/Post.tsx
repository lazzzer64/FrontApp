import type {IPost} from "../types/postInterface.tsx";

const Post = ({id, details}: IPost) => {
    return (
        <li className="post">
            <a className="post_title" href="#">{id}</a>
            <div className="post_details">{details}</div>
        </li>
    )
}

export default Post;