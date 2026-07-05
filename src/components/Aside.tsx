import AsideTitle from "./AsideTitle.tsx";
import PostsList from "./PostsList.tsx";
import "../css/main/aside/aside.css"

const Aside = () => {
    return (
        <aside>
            <AsideTitle/>
            <PostsList/>
        </aside>
    )
}

export default Aside;