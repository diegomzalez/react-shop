import React from 'react';
import logo from '@logos/logo_yard_sale.svg';
import '@styles/MobileMenu.scss';

const MobileMenu = () => {
    return (
        <div className="mobile-menu">
        <ul>
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