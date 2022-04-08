import { useTranslation } from 'react-i18next';
import React from 'react';


function Header() {
    const [t,i18n]=useTranslation('global');

    return (
        <div>
            {t('header.hello-world')}
            <br />
            <br />
            <button onClick={()=> i18n.changeLanguage('es')}>ES</button>
            <button onClick={()=> i18n.changeLanguage('en')}>EN</button>
        </div>
    );
}

export default Header;