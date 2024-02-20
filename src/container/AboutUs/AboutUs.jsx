import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
    <div
        className='app__aboutus app__bg flex__center section__padding'
        id='about'
    >
        <div className='app__aboutus-overlay flex__center'>
            <img
                src={images.B}
                alt='b letter'
            />
        </div>
        <div className='app__aboutus-content flex__center'>
            <div className='app__aboutus-content_about'>
                <h1 className='headtext__cormorant'>About Us</h1>
                <img
                    src={images.mixer}
                    alt='about_mixer'
                    className='mixer__img'
                />

                <p className='p__opensans'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, officiis!
                    Eveniet libero eaque exercitationem veritatis!
                </p>
                <button
                    type='button'
                    className='custom__button'
                >
                    Know More
                </button>
            </div>

            <div className='app__aboutus-content_history'>
                <h1 className='headtext__cormorant'>Our History</h1>
                <img
                    src={images.mixer}
                    alt='about_mixer'
                    className='mixer__img'
                />

                <p className='p__opensans'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, officiis!
                    Eveniet libero eaque exercitationem veritatis!
                </p>
                <button
                    type='button'
                    className='custom__button'
                >
                    Know More
                </button>
            </div>
        </div>
    </div>
);

export default AboutUs;
