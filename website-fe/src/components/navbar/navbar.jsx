import { Link, useNavigate } from "react-router-dom";
import {Button} from "@mui/material";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav style={{width: "50%", margin: "0 auto" }}>
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