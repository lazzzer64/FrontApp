import NavigationMenu from "./NavigationMenu.tsx";
import HeaderSearch from "./HeaderSearch.tsx";

const HeaderContainerLeft = () => {
return (
    <div className="header__container__left">
        <a className="header__logo" href="/">Postbin</a>
        <NavigationMenu/>
        <a className="new_post_btn" href="/">
            <span>
                paste
            </span>
        </a>
        <HeaderSearch/>
    </div>
)
}

export default HeaderContainerLeft;