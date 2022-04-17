import React from "react";
import s from './Footer.module.css';
import Container from "../Container";


const Footer = () => {
    return (
        <footer className={s.root}>
            <Container>
                <div className={s.footerWrap}>
                    Coded with
                    <span className={s.heart}> </span>
                    by You
                </div>
            </Container>
        </footer>
    )
};

export default Footer;