import React from "react";

import logoPng from "../../assets/logo.png"
import Heading from "../Heading";
import Container from "../Container";
import Button from "../Button";
import s from './Slider.module.scss';

const Slider = () => {
    return (
        <section className={s.section}>
            <div className={s.slider}>
                <Container className={s.sliderContent}>
                    <Heading level={1}>
                        Это Заголовок!
                    </Heading>
                    <Heading level={2}>
                        wow wow wow
                    </Heading>
                    <div className={s.image}>
                        <img src={logoPng} alt="Logo"/>
                    </div>
                    <div className={s.call}>
                        <Button name="wow"/>
                    </div>
                </Container>
            </div>
        </section>
    )
};

export default Slider;