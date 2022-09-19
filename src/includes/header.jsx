import {Logo} from './header/header-logo.jsx';
import { MenuBar } from './header/header-menubar.jsx';
import { PagesLink } from './header/header-pages-links.jsx';
import { Contact } from './header/header-contact.jsx';
import { Promo } from './main/promos/promo.jsx';
import { Wraper } from './main/wraper.jsx';
import { Heading } from './footer/heading.jsx';
import style from '../css/header/header-container.module.css';
import '../css/footer/footer-site.css';
export function Header(){
    return(
        <div className={style.headerContainer}>
            <Logo />
            <MenuBar />
            <PagesLink />
            <Contact />
        </div>
    )
}
export function Main(){
    return(
        <div className=''>
            <Promo/>
            <Wraper/>
        </div>
        
    )
}
export function Footer(){
    return(
        <div className='footerContainer'>
            <Heading/>
        </div>
    )
}