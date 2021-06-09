import style from '../Footer/Footer.module.css';

const Footer = () => {
    return (
        <footer className={style.footer}>
            <p className={style.footerParagraph}>&copy; All Rights Reserved</p>
        </footer>
    );
}

export default Footer;