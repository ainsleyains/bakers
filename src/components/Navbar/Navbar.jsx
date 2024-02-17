import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => (
    <nav className='app__navbar'>
        <div className='app__navbar-logo'>
            <a href='/'>
                <img
                    src={images.bakers}
                    alt='app logo'
                />
            </a>
        </div>
        <ul className='app__navbar-links'>
            <li className='p__opensans'>
                <a href='#about'>about</a>
            </li>
            <li className='p__opensans'>
                <a href='#menu'>Menu</a>
            </li>
            <li className='p__opensans'>
                <a href='#award'>Award</a>
            </li>
            <li className='p__opensans'>
                <a href='#contact'>Contact</a>
            </li>
        </ul>
    </nav>
);

export default Navbar;
