import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Header.css';

const Header = () => (
    <div
        className='app__header app__wrapper section__padding'
        id='home'
    >
        <div className='app__wrapper_info'>
            <SubHeading title='Chase the New Flavor' />
            <h1 className='app__header-h1'>The Key to Perfect Pastries</h1>
            <p
                className='p__opensans'
                style={{ margin: '2rem 0' }}
            >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi consectetur
                laboriosam molestias odit? Eum, nulla.
            </p>
            <button
                type='button'
                className='custom__button'
            >
                <a href='#menu'>Explore Menu</a>
            </button>
        </div>
        <div className='app__wrapper_img'>
            <img
                src={images.welcome}
                alt='header img'
            />
        </div>
    </div>
);

export default Header;
