import React from 'react';
import '../../style.css';

function Header_k() {
    return (
        <div className='head_main'>
            <h2>Kelena Dalam</h2>
            <nav className='head_nav'>
                <a href="">Home</a>
                <a href="">Mission</a>
                <a href="">Timeline</a>
                <a href="">About</a>
            </nav>
            <div>
                <img src='https://pnggrid.com/wp-content/uploads/2021/12/Office-Phone-Icon-PNG-Transparent-Background.png' alt='ring' height={40} style={{filter: "invert(100%)"}}/>
            </div>
        </div>
    )
}

export default Header_k