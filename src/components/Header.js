import React from 'react';
import { link } from 'react-router-dom';
import bannerImage from '../images/xxxxx';

const Header = () => {

    return (
<header className='header'>
    <section>

{/*header text*/}
<div className='banner'>
    <h2>Little Lemon</h2>
    <h3>Johannesburg</h3>
    <p>We looooooove foooood y'all!</p>
    <link to="/booking"><button aria-label='On Click'>Reserve Table</button></link>
</div>

{/*banner image*/}
<div className='banner-img'>
    <img src ={bannerImage} alt="banner image"></img>
</div>

    </section>
</header>


    );
};

export default Header;