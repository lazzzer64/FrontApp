const PostForm = ()=>{
    return (
        <>
            <input className="inputOfTextarea" placeholder="Название поста"></input>
            <form className="postform" aria-label="Название поста">

                <textarea className="postformtext" id='postform-text'>sdfsdf</textarea>
            </form>
            <button type='submit' className="postformsubmit">Создать пост</button>
        </>
    )
}

export default PostForm