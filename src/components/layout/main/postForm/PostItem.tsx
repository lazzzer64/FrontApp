import React from "react";

import "../../../../styles/main/aside/PostItem.css"

import type {postItem} from "../../../../types/postItem.ts";


const PostItem: ({post}: postItem) => React.JSX.Element = ({post}: postItem) => {
    return (
        <div className="post-item">
            <h3 className="post-item__title">{post.title}</h3>
            <p className="post-item__content">{post.content}</p>
        </div>
    );
};

export default PostItem;