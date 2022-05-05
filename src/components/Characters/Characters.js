import Container from "../Container";
import Heading from "../Heading";
import CharacterCard from "../CharacterCard";
import React, {useState} from "react";
import {CHARACTERS} from "../../pages/Biography/characters";
import {useNavigate} from "react-router-dom";

import s from "./Characters.module.scss";


export const Characters = () => {

    const [characters, setCharacters] = useState(CHARACTERS);
    const [id, setId] = useState(undefined)
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
        setId(id);
        navigate(`/bio/${id}`);
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