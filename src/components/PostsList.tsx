import { usePosts } from '../hooks/usePosts';
import PostItem from "./PostItem.tsx";
const PostsList = () => {
    const { data: posts, isLoading, isError, error } = usePosts();

    if (isLoading) return <div>Загрузка постов...</div>;
    if (isError) return <div>Ошибка: {error.message}</div>;

    return (
        <div>
            <hr />
            {posts?.map((post) => (
                <PostItem key={post.id} post={post} />
            ))}
        </div>
    );
};

export default PostsList;