import React from 'react';
import './Header.css';
/*import Headerimage from './Headerimage.png';*/
import { ReactComponent as Headerlogo } from "./Headerlogo.svg";



const Header = ({ headTitle, headerExpanded }) => {

    return (
        <div className="head-container">
            <div>
                <Headerlogo
                    className={`head-logo ${headerExpanded
                        ? 'head-logo-expanded'
                        : 'head-logo-contracted'
                        }`} />
            </div>
            <h1 className={`head-text ${headerExpanded
                    ? 'head-text-expanded'
                    : 'head-text-contracted'
                }`} >{headTitle}</h1>
        </div >
    );
};


export default Header;