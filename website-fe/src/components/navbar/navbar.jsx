import { useNavigate } from "react-router-dom";
//import {Button} from "@mui/material";
import styles from "./navbar.css";

export default function Navbar() {
 
    const navigate = useNavigate();
  return (
    <nav className={styles.Navbar}>
        <button onClick={()=>navigate("/")}>Home</button>
        <span> | </span>
        <button onClick={()=>navigate("/about")}>About</button>
        <span> | </span>
        <button onClick={()=>navigate("/contact")}>Contact</button>
        <span> | </span>
        <button onClick={()=>navigate("/blog")}>Blog</button>
        <span> | </span>
        <button onClick={()=>navigate("/portfolio")}>Portfolio</button>
        <span> | </span>
        <button onClick={()=>navigate("/clips")}>Clips</button>
    </nav>
  );
}