import HeaderContainerRight from "./HeaderSign.tsx";
import HeaderContainerLeft from "./HeaderContainerLeft.tsx";
import '../css/header/header.css';

const HeaderContainer = () => {
    return (
        <div className="header__container">
            <HeaderContainerLeft/>
            <HeaderContainerRight/>
        </div>
    )
}

export default HeaderContainer;