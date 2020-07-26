import React from 'react';
import './header.css';

// Facebook
// Instagram
// Git
// VKontacte
// Telegram

const Header = () => {
    return (
        <header>
            <p className='header--made-by'>
                made by:  
                <span className='made-by-name'>@mikeasta</span>
                <span className='contact-me'> Contact me →</span>
            </p>
            <nav className='header--contact'>

                <a href='#'> 
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a href='#'> 
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
                <a href='https://vk.com/mikeasta'> 
                    <i class="fab fa-vk"></i>
                </a>
                <a href='https://github.com/MikhailAstashonak'> 
                    <i class="fab fa-git"></i>
                </a>
                <a href='#'> 
                <i class="fab fa-telegram-plane"></i>
                </a>

            </nav>
        </header>
        
    )
};

export default Header;