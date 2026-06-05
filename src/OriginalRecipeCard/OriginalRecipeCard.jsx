import s from '../pages/Main/Main.module.css';

function OriginalRecipeCard(props) {
    return (
        <li className={s["original-recipes__card"]}>
            <a>
                <div>
                    <h3 className={s["card__title"]}>{props.card.title}</h3>
                </div>
                <div className={s["card__main-container"]}>
                    <img className={s["card__image"]} src={props.card.image} alt="Изображение рецепта" />
                    <p className={s["card__description"]}>
                        {props.card.description}
                    </p>
                </div>
                <div>
                    <span className={[s["card__additional-text"], s["left"]].join(' ')}>{props.card.time} минут</span>
                    <span className={[s["card__additional-text"], s["right"]].join(' ')}>{props.card.type}</span>
                </div>
            </a>
        </li>
    );
}

export default OriginalRecipeCard;