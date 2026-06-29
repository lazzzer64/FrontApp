// import IPost from "../interfaces/postInterface.tsx";

interface IPost {
    id: number;
    // title: string;
    // content: string;
    details: string;
}

const Post = ({id, details}: IPost) => {
    return (
        <li className="post">
            <a className="post_title" href="#">{id}</a>
            <div className="post_details">{details}</div>
        </li>
    )
}

export default Post;