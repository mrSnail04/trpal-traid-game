import React from 'react';
import cn from 'classnames';
import {useNavigate, useParams, Navigate, Link} from "react-router-dom";
import Text from "../../components/Text";
import Container from "../../components/Container";
import { BIO } from "./BIO"
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import LinkIcon from './assets/link_icon.svg';

import s from './Biography.module.scss';

const Biography = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const handleGoBackClick = () => {
        navigate(-1);
    }

    if (!BIO[id]) {
        return <Navigate to="/characters" />
    }

    return(
        <section className={cn(s.root, s.biographySection)}>
            <Container>
                <div>
                    <Button
                        name='Go Back'
                        black
                        onClick={handleGoBackClick}
                    />
                </div>
                {
                    BIO[id].map((item,i) => {
                        switch (item.type) {
                            case 'h1':
                                return <Heading key={i} black>{item.text}</Heading>
                            case 'h2':
                                return (
                                    <div key={i}>
                                        <Heading id={item.text.replace(/\s/g, "_")} black level={2}>
                                            {item.text}
                                            <Link to={`#${item.text.replace(/\s/g, "_")}`} id={id}>
                                                <img className={s.img}
                                                     src={LinkIcon}
                                                     alt='arch'
                                                />
                                            </Link>
                                        </Heading>
                                    </div>
                                );
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
