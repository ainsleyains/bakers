import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const Gallery = () => {
    return (
        <div className='app__gallery flex-center'>
            <div className='app__gallery-content'>
                <SubHeading title='Instagram' />
                <h1 className='headtext__cormorant'>Photo Gallery</h1>
                <p
                    className='p__opensans'
                    style={{ color: '#AAA', marginTop: '2rem' }}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur deserunt
                    nostrum quidem? Deserunt quisquam sunt explicabo eligendi.
                </p>
                <button
                    type='button'
                    className='custom__button'
                >
                    View More
                </button>
            </div>
            <div className='app__gallery-images'></div>
        </div>
    );
};

export default Gallery;
