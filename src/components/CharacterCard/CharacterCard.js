import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Heading from "../Heading";
import Text from "../Text";
import cn from 'classnames';
import s from './CharacterCard.module.scss';

import {ReactComponent as Like} from "./assets/heart.svg";


const CharacterCard = ({
    id,
    name,
    src,
    humanName,
    description,
    isLike,
    onLikeClick,
}) => {
    const handleClick = () => {
        onLikeClick(id);
    };
    return (
        <div className={s.root}>
            <img
                src={src}
                alt={name}
                className={s.cardImage}
            />
            <div className={s.cardDetails}>
                <Heading className={s.cardName} level={2}>
                    {name}
                </Heading>
                <Heading className={s.cardHumanName} level={4}>
                    {humanName}
                </Heading>
                <Text className={s.cardDescription}>
                    {description}
                </Text>
                <div className={s.cardMeta}>
                    <div
                        onClick={handleClick}
                        className={cn(s.like, {
                        [s.active]: isLike
                    })}
                    >
                        <Like className={s.like}/>
                    </div>
                    <div className={s.readBio}>
                        <a href="#">Read bio</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

CharacterCard.defaultProps ={
    isLike:false
}

CharacterCard.prototype = {
    id: PropTypes.number,
    name: PropTypes.string,
    src: PropTypes.string,
    humanName: PropTypes.string,
    description: PropTypes.string,
    isLike: PropTypes.bool,
    onLikeClick: PropTypes.func,
}

export default CharacterCard;