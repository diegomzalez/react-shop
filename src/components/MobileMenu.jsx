import React, { useContext } from 'react';
import '@styles/MobileMenu.scss';
import close from '@icons/icon_close.png';
import AppContext from '@context/AppContext';

const MobileMenu = () => {
    const { toggleMenuMobile } = useContext(AppContext);
    return (
        <div className="mobile-menu">
        <ul>
            <img src={close} alt="close" className="mobile-menu-close" onClick={() => toggleMenuMobile()}/>
            <li>
                <a href="">CATEGORIES</a>
            </li>
            <li>
                <a href="">All</a>
            </li>
            <li>
                <a href="">Clothes</a>
            </li>
            <li>
                <a href="">Electronics</a>
            </li>
            <li>
                <a href="">Furnitures</a>
            </li>
            <li>
                <a href="">Toys</a>
            </li>
            <li>
                <a href="">Others</a>
            </li>
        </ul>
        <ul>
            <li>
                <a href="">My orders</a>
            </li>
            <li>
                <a href="">My accounts</a>
            </li>
        </ul>
        <ul className="mobile-menu-email-and-sign-out">
            <li>
                <a href="/" className="mobile-menu-email">platzi@example.com</a>
            </li>
            <li>
                <a className="mobile-menu-sign-out" href="/">Sign out</a>
            </li>
        </ul>
    </div>
    )
};

export default MobileMenu;