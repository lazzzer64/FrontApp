import React from "react";
import {usePosts} from '../../../../features/posts/hooks/usePosts.ts';
import PostItem from "./PostItem.tsx";

const PostsList: () => (React.JSX.Element) = () => {
    const {data: posts, isLoading, isError, error} = usePosts();

    if (isLoading) return <div>Загрузка постов...</div>;
    if (isError) return <div>Ошибка: {error.message}</div>;

    const latestPosts = [...(posts || [])]
        .sort((a, b) => b.id - a.id) // предполагаем, что id возрастают
        .slice(0, 8);

    return (
        <div>
            <hr/>
            {latestPosts.length === 0 && <p>Нет постов</p>}
            {latestPosts.map((post) => (
                <PostItem key={post.id} post={post} />
            ))}
        </div>
    );
};

export default PostsList;