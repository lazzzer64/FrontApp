const HeaderSearch = () => {
    return (
        <div className="header__search">
            <form id="w0" className="header__search__form" action="http://localhost:5173/search" method="get">
                <input type="text" className="search__input" name="q" placeholder="Поиск..." />
                <button type="submit" className="search__button" aria-label="Search">
                    <svg className="icon search">
                        <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </form>
        </div>
    )
}

export default HeaderSearch;