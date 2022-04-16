import React from "react";
import Container from "../Container";
import s from './Header.module.scss';

import logoPng from "../../assets/logo.png";

const MENU = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'];

const Header = () => {
    return (
        <header className={s.root}>
            <div className={s.header}>
                <Container className={s.headerWrap}>
                    <div className={s.logo}>
                        <img src={logoPng} alt="Logo"/>
                    </div>
                    <ul className={s.nav}>
                        {MENU.map(itemMenu => <li key={itemMenu}><a href="#">{itemMenu}</a></li>)}
                    </ul>
                </Container>
            </div>
        </header>
    )
};

export default Header;