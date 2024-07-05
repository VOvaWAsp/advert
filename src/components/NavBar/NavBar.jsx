import { NavLink } from "react-router-dom";
import css from "./NavBar.module.css"

function NavBar() {
    return (
    <nav className={css.nav}>
        <div className={css.container}>
                <NavLink className={css.link} to='/'>Home</NavLink>
                <NavLink className={css.link} to='/catalog'>Catalog</NavLink>
                <NavLink className={css.link} to='/favorites '>Favorites</NavLink>
        </div>
    </nav>
    )
}

export default NavBar;