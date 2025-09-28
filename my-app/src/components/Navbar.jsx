import "./Navbar.css";
import { IoSpeedometerOutline } from "react-icons/io5";
import { LuSunMedium } from "react-icons/lu";
import { FaRegMoon } from "react-icons/fa";

function Navbar(props)
{
    return <div className={props.dabba? "dark-navbar" : "navbar" }>
        <h1><IoSpeedometerOutline /> SpeedoType</h1>
        <div className="nav-right">
            <p className="best-text">Best Score : <span className="best-score">{props.best}</span></p>
            <button className="theme-toggle" onClick={props.changeTheme}>{props.dabba? <LuSunMedium/> : <FaRegMoon/>}</button>
        </div>
    </div>
}
export default Navbar;

