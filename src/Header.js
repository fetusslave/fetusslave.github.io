import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-header fixed-top">
        <button className="navbar-toggler navbar-light ml-auto" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mx-auto">
            <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/projects" className="nav-link">Projects</Link>
            </li>
            <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact</Link>
            </li>
        </ul>
        </div>
        </nav>
        </>
    );
}
