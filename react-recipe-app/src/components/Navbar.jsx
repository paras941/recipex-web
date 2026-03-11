import { Link, useLocation } from "react-router-dom"
import { useState } from "react"
import Sidebar from "./Sidebar"
import { useApp } from "../context/AppContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faList, faCog, faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons"

export default function Navbar(){
    const [showSidebar, setShowSidebar] = useState(false)
    const location = useLocation()
    const { favorites, shoppingList } = useApp()
    
    const links = [
        {
            name: "Home",
            path: "/",
            icon: faHome
        },
        {
            name: "Recipes",
            path: "/recipes",
            icon: faList
        },
        {
            name: "Favorites",
            path: "/favorites",
            icon: faHeart,
            badge: favorites.length
        },
        {
            name: "Shopping",
            path: "/shopping-list",
            icon: faShoppingCart,
            badge: shoppingList.length
        },
        {
            name: "Settings",
            path: "/settings",
            icon: faCog
        }
    ]

    function closeSidebar(){
        setShowSidebar(false)
    }
    return (
        <>
            <div className="navbar container">
                <Link to="/" className="logo">F<span>oo</span>diesHub</Link>
                <div className="nav-links">
                    { links.map(link => (
                        <Link 
                            className={`nav-link ${location.pathname === link.path ? "active" : ""}`} 
                            to={link.path} 
                            key={link.name}
                        >
                            <FontAwesomeIcon icon={link.icon} className="nav-icon" />
                            <span>{link.name}</span>
                            {link.badge > 0 && (
                                <span className="nav-badge">{link.badge}</span>
                            )}
                        </Link>
                    )) }
                </div>
                <div onClick={() => setShowSidebar(true)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
            { showSidebar && <Sidebar close={closeSidebar} links={links} /> }
        </>
    )
}