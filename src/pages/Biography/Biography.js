import React from 'react';
import cn from 'classnames';
import {useParams} from "react-router-dom";
import Text from "../../components/Text";
import Container from "../../components/Container";
import { BIO } from "./BIO"
import Heading from "../../components/Heading";

import s from './Biography.module.scss';

const Biography = () => {
    const {id} = useParams();

    return(
        <section className={cn(s.root, s.biographySection)}>
            <Container>
                {
                    BIO[id].map((item,i) => {
                        switch (item.type) {
                            case 'h1':
                                return <Heading key={i} black>{item.text}</Heading>
                            case 'h2':
                                return <Heading key={i} black level={2}>{item.text}</Heading>
                            case 'paragraph':
                                return <Text key={i} element={"p"}>{item.text}</Text>
                            case 'img':
                                return <div key={i} className={s.root}>
                                    <img src={item.src} alt={"Изображение героя"} />
                                    </div>
                            default:
                                return <Text element={"div"} key={i}>{item.text}</Text>
                        }
                    })
                }
            </Container>
        </section>
    );
};

Biography.propTypes = {};

Biography.defaultProps = {};

export default Biography;
