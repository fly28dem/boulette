import s from './RecipeCard.module.css';
import viewIcon from '../images/item-views__image.png';
import timeIcon from '../images/item-time__image.png';

function RecipeCard({card}) {

    return (
        <li className={s["article-list__card"]}>
            <a className={s["card__container"]} href="#">
                <img className={s["card__image"]} src={card.preview} alt="article image" />
                <div className={s["card__main-content"]}>
                    <h1 className={s["card__title"]}>{card.title}</h1>
                    <p className={s["card__description"]}>
                        {card.description}
                    </p>
                    <ul className={s["card__hashtag-list"]}>
                        <li className={s["hashtag-list__item"]}>
                            <img className={s["hashtag-list__image"]} src={card.flag} alt="flag" />
                            {card.tags[0]}</li>
                        <li className={s["hashtag-list__item"]}>{card.tags[1]}</li>
                        <li className={s["hashtag-list__item"]}>{card.tags[2]}</li>
                    </ul>
                    <ul className={s["card__tag-list"]}>
                        <li className={s["tag-list__item-views"]}>
                            <img className={s["item-views__image"]} src={viewIcon} alt="views" />
                            <span className={s["item-views__text"]}>
                            {/* Условная торисовка просмотров */}
                                {
                                    card.views > 999999 
                                    ? <>{(~~(card.views / 100000) / 10).toLocaleString('ru-RU')} млн.</>
                                    :
                                    card.views > 999
                                    ? <>{~~(card.views / 1000)} тыс.</>
                                    : <>{card.views}</>
                                }
                            </span>
                        </li>
                        <li className={s["tag-list__item-time"]}>
                            <span className={s["item-time__text"]}>
                            {/* Условная отрисовка часов и минут */}
                                {~~(card.time / 60) > 0
                                ? <>{~~(card.time / 60)} ч. </>
                                : ''}
                                {~~(card.time % 60) > 0
                                ? <>{~~(card.time % 60)} мин. </>
                                : ''}
                            </span>
                            <img src={timeIcon} alt="time" />
                        </li>
                    </ul>
                </div>
            </a>
        </li>
    );
}

export default RecipeCard;