import TextAreaField from "./TextAreaField.tsx";

const PostForm = () => {
    return (
        <>
            <form className="postform" aria-label="Название поста">
                <input className="inputOfTextarea" placeholder="Название поста"></input>
                <TextAreaField/>
                <button type='submit' className="postformsubmit" form="postform">Создать пост</button>
            </form>
        </>
    )
}

export default PostForm