import Container from "../../components/Container";
import Heading from "../../components/Heading";
import CharacterCard from "../../components/CharacterCard";
import React, {useState} from "react";
import {CHARACTERS} from "../Biography/characters";
import {useNavigate} from "react-router-dom";

import s from "./Characters.module.scss";


export const Characters = () => {

    const [characters, setCharacters] = useState(CHARACTERS);
    const navigate = useNavigate();

    const handleLikeClick = (id) => {
        setCharacters((prevState) =>prevState.map(item =>{
            if (item.id===id){
                return {
                    ...item,
                    isLike: !item.isLike,
                };
            }
            return item;
        }));
    };
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
                                        onLikeClick={handleLikeClick}
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