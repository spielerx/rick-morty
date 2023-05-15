import React from "react";
import { Character } from "rickmortyapi";
import styles from "./CharacterCard.module.scss";

export const CharacterCard: React.FC<{ character: Character }> = ({
    character,
}) => {
    return <div className={styles.characterCard}>{character.name}</div>;
};
