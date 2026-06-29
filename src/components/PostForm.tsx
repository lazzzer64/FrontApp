const PostForm = ()=>{
    return (
        <>
            <form className="postform" aria-label="Название поста">
                <input className="inputOfTextarea" placeholder="Название поста"></input>
                <textarea className="postformtext" id='postform-text'>sdfsdf</textarea>
                <button type='submit' className="postformsubmit" form="postform">Создать пост</button>
            </form>
        </>
    )
}

export default PostForm