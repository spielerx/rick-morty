import React from "react";
import { Link } from "react-router-dom";
import styles from "./CharacterPreview.module.scss";

export const CharacterPreview: React.FC<{
    id: number;
    name: string;
    image: string;
}> = ({ id, name, image }) => {
    return (
        <div className={styles.wrapper}>
            <img src={image} alt={name} className={styles.image} />
            <Link to={`/character/${id}`}>
                <div className={styles.name}>{name}</div>
            </Link>
        </div>
    );
};
