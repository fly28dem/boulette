import { Link } from 'react-router';
import logo from '../../images/loginIcon.png'
import s from './Header.module.css';

function Header() {
  return (
    <header className={[s.header, 'container'].join(' ')}>
        <nav className={s.header__navigation}>
            {/* Логотип */}
            <div><a href="index.html" className={s.logotype}>boulette</a></div>
            {/* Ссылки на страницы */}
            <ul className={s.navigation__list}>
                <Link to="/"><li>главная</li></Link>
                <Link to="/recipes"><li>рецепты</li></Link>
                <Link to="/"><li>журнал</li></Link>
                <Link to="/"><li>редактор</li></Link>
            </ul>
            {/* Авторизация */}
            <div className={s.login__container}>
                <a href="#">
                    <img className={s.login__image} src={logo} alt="logo"/>
                    <span className={s.login__text}>войти</span>
                </a>
            </div>
        </nav>
    </header>
  );
}

export default Header;