import { NavLink, Outlet } from "react-router-dom";


export default function Home() {
    console.log(window.location.pathname)
    console.log();
    return (
        <div>
            <nav className="navbar nav bg-secondary navbar-expand-lg">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}