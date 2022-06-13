import Container from "../../components/Container";
import Heading from "../../components/Heading";
import CharacterCard from "../../components/CharacterCard";
import React, { useContext } from "react";
import {useNavigate} from "react-router-dom";
import { ContextCharacters } from "../../components/ContextCharactersProvider/ContextCharactersProvider";

import s from "./Characters.module.scss";

export const Characters = () => {
    const navigate = useNavigate();
    const { characters, likeClick } = useContext(ContextCharacters)
    const handleBiographyClick = (id) => {
        navigate(`/characters/${id}`);
    };

    return(
        <section className={s.cardSection}>
            <Container>
                <div className={s.cardTitle}>
                    <Heading backLine black>
                        Marvel Cards
                    </Heading>
                    <Heading level={2} black>
                        Collect your best five
                    </Heading>
                </div>
                <div className={s.cardWrap}>
                    {
                        characters.map(item => {
                            return (
                                <div key={item.id}>
                                    <CharacterCard
                                        id={item.id}
                                        name={item.name}
                                        src={item.thumbnail.path}
                                        description={item.description}
                                        humanName={item.humanName}
                                        isLike={item.isLike}
                                        onLikeClick={likeClick}
                                        onBiographyClick={handleBiographyClick}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </Container>
        </section>
    )
};