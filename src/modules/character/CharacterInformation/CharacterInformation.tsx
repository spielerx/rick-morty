import { useQuery } from "@apollo/client";
import { GET_CHARACTER } from "queries/characters";
import { Character, Episode } from "rickmortyapi";
import { formatDateTime } from "utils/date";
import { shuffleArray } from "utils/shuffle";
import { CharacterPreview } from "modules/character/CharacterPreview/CharacterPreview";
import { Loader } from "modules/common/Loader/Loader";
import cx from "clsx";
import styles from "./CharacterInformation.module.scss";

const getRandomResidents = (residents: Character[], limit = 5) =>
    shuffleArray<Character>(residents).slice(0, limit);

export const CharacterInformation: React.FC<{ id: number }> = ({ id }) => {
    const {
        loading,
        error,
        data: { character } = {},
    } = useQuery(GET_CHARACTER, {
        variables: {
            id,
        },
    });

    if (loading) return <Loader />;

    if (error) return <div>Error! {error.message}</div>;

    return (
        <article className={styles.wrapper}>
            <div className="row">
                <div className="col-12 col-md-5 col-xl-3">
                    <div className="row">
                        <div className="col-12 col-xs-5 col-md-12">
                            <div className={styles.image}>
                                <img
                                    src={character.image}
                                    alt={character.name}
                                />
                            </div>
                        </div>
                        <div className="col-12 col-xs-7 col-md-12">
                            <div className={styles.name}>{character?.name}</div>
                            <div className={cx(styles.species, styles.field)}>
                                <span>Species:</span> {character?.species}
                            </div>
                            <div className={cx(styles.gender, styles.field)}>
                                <span>Gender:</span> {character?.gender}
                            </div>
                            <div className={cx(styles.status, styles.field)}>
                                <span>Status:</span> {character?.status}
                            </div>
                            <div className={cx(styles.create, styles.field)}>
                                <span>Created:</span>{" "}
                                {formatDateTime(new Date(character?.created))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-7 col-xl-5">
                    {character?.origin?.id && (
                        <article className={styles.group}>
                            <header className={styles.groupHeading}>
                                {`${character?.origin?.name} · ${character?.origin?.type}`}
                                <span>
                                    ({character?.origin?.residents?.length}{" "}
                                    residents)
                                </span>
                            </header>
                            <div className={styles.previewList}>
                                {getRandomResidents(
                                    character?.origin?.residents
                                ).map((resident: Character) => (
                                    <CharacterPreview
                                        key={resident.id}
                                        id={resident.id}
                                        name={resident.name}
                                        image={resident.image}
                                    />
                                ))}
                            </div>
                            <footer className={styles.groupHint}>
                                showing 5 random residents...
                            </footer>
                        </article>
                    )}

                    {character?.location?.id && (
                        <article className={styles.group}>
                            <header className={styles.groupHeading}>
                                {`${character?.location?.name} · ${character?.location?.type}`}
                                <span>
                                    ({character?.location?.residents?.length}{" "}
                                    residents)
                                </span>
                            </header>
                            <div className={styles.previewList}>
                                {getRandomResidents(
                                    character?.origin?.residents
                                ).map((resident: Character) => (
                                    <CharacterPreview
                                        key={resident.id}
                                        id={resident.id}
                                        name={resident.name}
                                        image={resident.image}
                                    />
                                ))}
                            </div>
                            <footer className={styles.groupHint}>
                                showing random 5 residents...
                            </footer>
                        </article>
                    )}
                </div>
                <div className="col-12 col-md-12 col-xl-4">
                    <article>
                        <header className={styles.groupHeading}>
                            Episodes
                            <span>({character?.episode?.length} episodes)</span>
                        </header>
                        {character?.episode?.map(
                            (episode: Episode, index: number) => (
                                <div
                                    key={index}
                                    title={`Air date: ${episode.air_date}`}
                                >
                                    {episode.episode} · {episode.name}
                                </div>
                            )
                        )}
                    </article>
                </div>
            </div>
        </article>
    );
};
