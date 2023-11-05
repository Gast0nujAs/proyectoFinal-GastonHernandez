import { Link } from "react-router-dom";
import "bulma/css/bulma.css";
import CartWidget from "../CartWidget/CartWidget";
function NavBar() {
    return (
        <nav class="navbar is-primary is-expanded" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="">
                    <h1 className="title is-1">Dasper Vintage</h1>
                </a>

                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <CartWidget/>
        </nav>


    )
}

export default NavBar;