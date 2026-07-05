import type { IPost } from '../types/postInterface';

interface PostItemProps {
    post: IPost;
}

const PostItem = ({ post }: PostItemProps) => {
    return (
        <div className="post-item">
            <h3 className="post-item__title">{post.title}</h3>
            <p className="post-item__content">{post.content}</p>
            {/*{post.details && (*/}
            {/*    <p className="post-item__details">*/}
            {/*        <strong>Детали:</strong> {post.details}*/}
            {/*    </p>*/}
            {/*)}*/}
            {/*<small className="post-item__id">ID: {post.id}</small>*/}
        </div>
    );
};

export default PostItem;