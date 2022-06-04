import { Link } from "react-router-dom";
import "../css/navbar.css";
import {GiMagnifyingGlass} from 'react-icons/gi'

const Navbar = () => {
    return (
        <nav>
            <Link to='/' className="style-logo">
            <div className="logo style-logo"><GiMagnifyingGlass /> Lupa dos Gastos</div>
            </Link>
            <div className="menu">
                <ul>
                    <li><Link to="/" className="nav-link">Home</Link></li>
                    <li><a href="#deputados" className="nav-link">Deputados</a></li>
                    <li><Link to="/grafico" className="nav-link">Graficos</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;