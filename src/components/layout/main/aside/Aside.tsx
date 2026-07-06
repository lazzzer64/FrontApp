import AsideTitle from "./AsideTitle.tsx";
import PostsList from "../postForm/PostsList.tsx";
import "../../../../styles/main/aside/aside.css"

const Aside = () => {
    return (
        <aside>
            <AsideTitle/>
            <PostsList/>
        </aside>
    )
}

export default Aside;