import '../css/main.css';
import PostForm from "./PostForm.tsx";
import Aside from "./Aside.tsx";

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