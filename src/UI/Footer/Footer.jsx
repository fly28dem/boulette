import s from './Footer.module.css';

function Footer() {
  return (
    <footer className={[s.footer, 'container'].join(' ')}>
        <div className={s['footer__header']}>
            <a className={s['footer__logotype']}>boulette</a>
            <span className={s['footer__copyright']}>2026, Дергунов С.К. | MIT License</span>
            <hr />
        </div>
        <div className={s['footer__main']}>
            <div className={s['footer__column']}>
                <ul className={s['footer__mail-list']}>
                    <li><a href='mailto:fly28dem@gmail.com'>fly28dem@gmail.com</a></li>
                    <li><a href='mailto:mainmail9999@gmail.com'>mainmail9999@gmail.com</a></li>
                    <li><a href='mailto:Coperiron@yandex.com'>Coperiron@yandex.com</a></li>
                </ul>
                <ul className={s['footer__number-list']}>
                    <li><a href='tel:+7(999)235-67-79'>+7(999)235-67-79</a></li>
                    <li><a href='tel:+7(991) 992-68-50'>+7(991)992-68-50</a></li>
                </ul>
            </div>
            <div className={s['footer__column']}>
                <nav>
                    <ul className={s['footer__navigation-list']}>
                        <li><a href='./index.html'>Главная</a></li>
                        <li><a href='./recipes.html'>Рецепты</a></li>
                        <li><a href='#./journal.html'>Журнал</a></li>
                        <li><a href='#./account.html'>Профиль</a></li>
                    </ul>
                </nav>
                <ul className={s['footer__social-media-list']}>
                    <li><a href='https://github.com/fly28dem/boulette'>GitHub</a></li>
                    <li><a href='https://t.me/kanulvletu0'>Telegram</a></li>
                </ul>
            </div>
        </div>
    </footer>
  );
}

export default Footer;