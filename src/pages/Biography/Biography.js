import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Button from "../../components/Button";
import Text from "../../components/Text";
import Container from "../../components/Container";
import {BIO} from "./BIO"
import Heading from "../../components/Heading";

import s from './Biography.module.scss';


const Biography = ({
               id,
               onBackClick,
}) => {
    const handleBack = () => {
        onBackClick();
    };
    let biography = BIO[id]

    return(
        <section className={cn(s.root, s.biographySection)}>
            <Container>
                <div className={cn(s.root, s.backButton)}>
                    <Button onClick={handleBack} name={"Go back"} black/>
                </div>
                {
                    biography.map((item,i) => {
                        let tag;
                        switch (item.type) {
                            case 'h1':
                                tag = <Heading black>{item.text}</Heading>
                                break;
                            case 'h2':
                                tag = <Heading black level={2}>{item.text}</Heading>
                                break;
                            case 'paragraph':
                                tag = <Text element={"p"}>{item.text}</Text>
                                break;
                            case 'img':
                                tag = <div className={s.root}>
                                    <img src={item.src} alt={'Изображение героя'}></img>
                                    </div>
                                break;
                            default:
                                break;
                        }
                        return(
                            <React.Fragment key={i}>{tag}</React.Fragment>
                        )
                    })
                }
            </Container>
        </section>
)};

Biography.propTypes = {
    id: PropTypes.number,
    onBackClick: PropTypes.func,
};

Biography.defaultProps = {

};

export default Biography;
