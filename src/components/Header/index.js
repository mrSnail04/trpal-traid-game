import React from "react";
import style from './Header.module.css';

const Header = () => {
    const MENU = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'];
    return (
        <header className={style.root}>
            <div className={style.header}>
                <div className={style.container}>
                    <div className={style.logo}></div>
                    <ul className={style.nav}>
                        {MENU.map(itemMenu => <li><a href="#">{itemMenu}</a></li>)}
                    </ul>
                </div>
            </div>
        </header>
    )
};

export default Header;