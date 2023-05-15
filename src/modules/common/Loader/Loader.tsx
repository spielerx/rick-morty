import React from "react";
import cx from "clsx";
import styles from "./Loader.module.scss";

export const Loader: React.FC<{ className: string }> = ({ className }) => (
    <div className={cx(styles.dots, className)}>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
    </div>
);
