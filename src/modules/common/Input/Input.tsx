import React from "react";
import styles from "./Input.module.scss";

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (
    props
) => {
    return <input type="text" {...props} className={styles.input} />;
};
