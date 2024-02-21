import React from 'react';
import { images, data } from '../../constants';
import { SubHeading, MenuItem } from '../../components';
import './SpecialMenu.css';

const SpecialMenu = () => (
    <div
        className='app__specialMenu flex__center section__padding'
        id='menu'
    >
        <div className='app__specialMenu-title'>
            <SubHeading title='Menu that fits your palatte' />
            <h1 className='headtext__cormorant'>Today's Special</h1>
        </div>
        <div className='app__specialMenu-menu'>
            <div className='app__specialMenu-menu_coffee flex__center'>
                <p className='app__specialMenu-menu_heading'>Coffee</p>
                <div className='app__specialMenu-menu_items'>
                    {data.coffees.map((coffee, i) => (
                        <MenuItem
                            key={coffee.name + i}
                            title={coffee.title}
                            price={coffee.price}
                            tags={coffee.tags}
                        />
                    ))}
                </div>
            </div>
            <div className='app__specialMenu-menu_img'>
                <img
                    src={images.menu}
                    alt='menu'
                />
            </div>
            <div className='app__specialMenu-menu_pastry flex__center'>
                <p className='app__specialMenu-menu_heading'>Pastry</p>
                <div className='app__specialMenu-menu_items'>
                    {data.pastries.map((pastry, i) => (
                        <MenuItem
                            key={pastry.name + i}
                            title={pastry.title}
                            price={pastry.price}
                            tags={pastry.tags}
                        />
                    ))}
                </div>
            </div>
        </div>
        <div style={{ marginTop: '15px' }}>
            <button
                type='button'
                className='custom__button'
            >
                View More
            </button>
        </div>
    </div>
);

export default SpecialMenu;
