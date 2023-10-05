import styles from "./Navigation.module.css";

import { HandMetal } from "lucide-react";

import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className={`container ${styles.navbar}`}>
      <Link to="/" className="brandStyle">
        <HandMetal color="gold" />
        <span className="logoText">Hangout</span>
      </Link>
    </nav>
  );
};

export default Navigation;
