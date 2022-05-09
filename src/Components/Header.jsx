import { useTranslation } from 'react-i18next';
import React from 'react';
import Search from './Search';


function Header() {
    const [t,i18n]=useTranslation('global');

    return (
        <div>
            <br />
            <br />
            <button onClick={()=> i18n.changeLanguage('es')}>ES</button>
            <button onClick={()=> i18n.changeLanguage('en')}>EN</button>
            
        </div>
    );
}

export default Header;