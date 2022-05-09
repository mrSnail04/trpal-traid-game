import React, {useEffect, useState} from "react";
import Container from "../Container";
import {NavLink, useNavigate} from "react-router-dom";
import cn from 'classnames';
import logoPng from "../../assets/logo.png";
import s from './Header.module.scss';

const MENU = [
    {
        title: 'Main',
        href: '/',
    },
    {
        title: 'Characters',
        href: '/characters',
    },
    {
        title: 'About',
        href: '/about',
    },
    {
        title: 'Contacts',
        href: '/contacts',
    },
]

const Header = () => {
    const [NavBarSmall, setNavBarSmall] = useState(null);
    const navigate = useNavigate();

    const handleScrolly = () => {
        window.scrollY > 60 ? setNavBarSmall(s.small) : setNavBarSmall(null)
    };
    useEffect(() => {
        window.addEventListener(`scroll`, handleScrolly)
        return () => {window.removeEventListener(`scroll`, handleScrolly)}
    });

    const handleLogoClick = () => {
        navigate('/')
    }
    return (
        <header className={cn(s.root)}>
            <div className={cn(s.header, NavBarSmall)}>
                <Container className={s.headerWrap}>
                    <div className={s.logo} onClick={handleLogoClick}>
                        <img src={logoPng} alt="Logo"/>
                    </div>
                    <ul className={s.nav}>
                        {
                            MENU.map((item, index) => (
                                <li key={index}>
                                    <NavLink
                                        to={item.href}
                                        className={({isActive}) => {
                                            return isActive ? s.active : null;
                                        }}
                                    >
                                        {item.title}</NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </Container>
            </div>
        </header>
    )
};

export default Header;