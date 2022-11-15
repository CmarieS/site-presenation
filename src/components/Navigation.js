import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <div class="navigation">
            <NavLink exact to="/" activeClassName="nav-active">Accueil</NavLink>
        </div>
    )
};

export default Navigation;