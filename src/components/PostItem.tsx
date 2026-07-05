import React from "react";

import "../css/main/aside/PostItem.css"

import type {PostItemPropsInterface} from "../types/PostItemPropsInterface.tsx";


const PostItem: ({post}: PostItemPropsInterface) => React.JSX.Element = ({post}: PostItemPropsInterface) => {
    return (
        <div className="post-item">
            <h3 className="post-item__title">{post.title}</h3>
            <p className="post-item__content">{post.content}</p>
        </div>
    );
};

export default PostItem;