import React from 'react';
import PropTypes from 'prop-types';
import Heading from "../Heading";
import Text from "../Text";
import cn from 'classnames';
import {ReactComponent as Like} from "./assets/heart.svg";

import s from './CharacterCard.module.scss';

const CharacterCard = ({
    id,
    name,
    src,
    humanName,
    description,
    isLike,
    onLikeClick,
    onBiographyClick,
}) => {
    const handleClick = () => {
        onLikeClick && onLikeClick(id);
    };
    const handleBiography = () => {
        onBiographyClick(id);
    };
    return (
        <div className={s.root}>
            <img
                src={src}
                alt={name}
                className={s.cardImage}
            />
            <div className={s.cardDetails}>
                <Heading className={s.cardName} level={2} black>
                    {name}
                </Heading>
                <Heading className={s.cardHumanName} level={4}>
                    {humanName}
                </Heading>
                <Text element={"p"} className={s.cardDescription}>
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
                    <div

                        className={s.readBio}>
                        <span className={s.span} onClick={handleBiography}>Read bio</span>
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