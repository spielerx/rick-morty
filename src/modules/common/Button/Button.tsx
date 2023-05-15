import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ icon, children, ...props }) => {
    return (
        <button className={styles.button} {...props}>
            {children}
            {icon && <span className={styles.icon}>{icon}</span>}
        </button>
    );
};
