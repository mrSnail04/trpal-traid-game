import React, {useEffect, useState} from "react";
import {CHARACTERS} from "../../pages/Biography/characters";


export const ContextCharacters = React.createContext(null);

export const ContextCharactersProvider = ({ children }) => {
    const [characters, setCharacters] = useState(CHARACTERS);
    const handleLikeClick = (id) => {
        const newCharacters = characters.map((item) =>
            item.id === id ? { ...item, isLike: !item.isLike } : item
        );
        setCharacters(newCharacters);
    };

    useEffect(() =>{
        const characters = localStorage.getItem("Characters");
        characters ? setCharacters(JSON.parse(characters)) : setCharacters(CHARACTERS)
        },[]
    )
    useEffect(()=>{
        localStorage.setItem("Characters", JSON.stringify(characters));
    },[characters])

    return (
        <ContextCharacters.Provider value={{
            characters,
            likeClick: handleLikeClick,
        }}>
            {children}
        </ContextCharacters.Provider>
    )
};