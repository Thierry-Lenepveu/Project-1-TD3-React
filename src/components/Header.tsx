function Header() {
    return (
        <header>
            <img id="logo" src="./src/assets/logo-redim.png" alt=""/>
            <div id="search-bar">
                <img src="./src/assets/loupe.png" alt=""/>
                <input type="text" className="search-input" placeholder="Rechercher..."/>
            </div>
        </header>
    );}

export default Header;