const  Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>Doth News</h1>
            <div className="links">
                <a href="/Home" >latest news</a>
                <a href="#">about</a>
                <a href="/Register">login</a>
            </div>
        </nav>
    );
}

export default Navbar;