import { Link } from "react-router-dom";
import {Button} from "@mui/material";
import styles from "./navbar.css";

export default function Navbar() {
 
  return (
    <nav className={styles.Navbar}>
        <Link to="/">
            <Button>Home</Button>
        </Link>
        <span> | </span>
        <Link to="/about">
            <Button>About</Button>
        </Link>
        <span> | </span>
        <Link to="/contact">
            <Button>Contact</Button>
        </Link>
        <span> | </span>
        <Link to="/blog">
            <Button>Blog</Button>
        </Link>
        <span> | </span>
        <Link to="/portfolio">
            <Button>Portfolio</Button>
        </Link>
    </nav>
  );
}