import logo from "assets/logo.png";
import { Link } from "react-router-dom";
import { SearchBox } from "modules/layout/search/SearchBox";
import styles from "./Header.module.scss";

export const Header = () => {
    return (
        <div className={styles.header}>
            <Link to="/">
                <div className={styles.logo}>
                    <img src={logo} alt="logo" />
                </div>
            </Link>
            <div className={styles.search}>
                <SearchBox />
            </div>
        </div>
    );
};
