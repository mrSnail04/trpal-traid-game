import React, {useEffect, useState} from "react";
import Container from "../Container";
import s from './Header.module.scss';
import cn from 'classnames';

import logoPng from "../../assets/logo.png";

const MENU = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'];



const Header = () => {
    const [NavBarSmall, setNavBarSmall] = useState(null);
    const handleScrolly = () => {
        window.scrollY > 60 ? setNavBarSmall(s.small) : setNavBarSmall(null)
    };
    useEffect(() => {
        window.addEventListener(`scroll`, handleScrolly)
        return () => {window.removeEventListener(`scroll`, handleScrolly)}
    });

    return (
        <header className={cn(s.root)}>
            <div className={cn(s.header, NavBarSmall)}>
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