import '../../../styles/header/header.css';

import HeaderContainerLeft from "./HeaderContainerLeft.tsx";
import HeaderContainerRight from "./HeaderSign.tsx";

export function Header() {
    return (
        <header>
            <HeaderContainerLeft/>
            <HeaderContainerRight/>
        </header>

    );
}

export default Header;