import React from "react";
import { Character } from "rickmortyapi";
import { GiBracers, GiCompass } from "react-icons/gi";
import styles from "./CharacterCard.module.scss";

export const CharacterCard: React.FC<{ character: Character }> = ({
    character,
}) => {
    return (
        <article className={styles.characterCard}>
            <div className={styles.avatar}>
                <div className={styles.overlay}></div>
                <div className={styles.circle}>
                    <img src={character.image} alt={character.name} />
                </div>
            </div>

            <div className={styles.information}>
                <p className={styles.name}>{character.name}</p>
                <p className={styles.race}>
                    <GiBracers />
                    {character.status === "unknown"
                        ? "Dead"
                        : character.status}{" "}
                    - {character.species}
                </p>
                <div className={styles.location}>
                    <span>Last known location:</span>
                    <GiCompass /> {character.location.name}
                </div>
            </div>
        </article>
    );
};
