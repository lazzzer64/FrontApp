import Aside from "./aside/Aside.tsx";
import PostForm from "./postForm/PostForm.tsx";

const Main = () => {
    return (
        <main>
            <PostForm/>
            <Aside/>
        </main>
    )
}

export default Main;