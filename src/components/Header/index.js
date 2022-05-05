import React, {useEffect, useState} from "react";
import Container from "../Container";
import {Link, useNavigate} from "react-router-dom";
import cn from 'classnames';
import logoPng from "../../assets/logo.png";
import s from './Header.module.scss';

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
                        <li><Link to='/'>Main</Link></li>
                        <li><Link to='/characters'>Characters</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/contacts'>Contact</Link></li>
                    </ul>
                </Container>
            </div>
        </header>
    )
};

export default Header;