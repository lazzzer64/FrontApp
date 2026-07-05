import '../css/main.css';
import Aside from "./Aside.tsx";
import PostForm from "./PostForm.tsx";

const Main = () => {
    return (
        <main>
            <div className={'blank'}></div>
            <PostForm/>
            <Aside/>
        </main>
    )
}

export default Main;