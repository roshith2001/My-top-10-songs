import React from 'react';
import Logo from '../assets/logo_no_bg.png'

const Header = (props) => {
    return(
        <div>
            <div className='w-full h-24 bg-zinc-900 text-slate-100 flex items-center'>
                <img className="w-56 mx-auto object-cover" src={Logo} alt='logo' />
            </div>
        </div>
    );
}

export default Header;