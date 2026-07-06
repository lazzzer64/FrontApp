import NavigationMenu from "./NavigationMenu.tsx";
import HeaderSearch from "./HeaderSearch.tsx";
import "../../../styles/header/HeaderContainerLeft.css"

const HeaderContainerLeft = () => {
return (
    <div className="header__container__left">
        <a className="header__logo" href="/public">Postbin</a>
        <NavigationMenu/>
        <a className="new_post_btn" href="/public">
            <span>
                paste
            </span>
        </a>
        <HeaderSearch/>
    </div>
)
}

export default HeaderContainerLeft;