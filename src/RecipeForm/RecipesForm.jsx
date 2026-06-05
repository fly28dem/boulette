import { useState } from "react";
import s from "./RecipesForm.module.css";

function RecipeForm() {

    const [value, setValue] = useState('defaultValue');

    function handleClick(e) {
        console.log('click')
        console.log(value)
        setValue(e.target.value)
        console.log(value)
    }

    return (
        <form className={s["recipes__form"]} action="">
            <fieldset>
                <legend className={s["form__title"]}>Открытая база рецептов</legend>
                <div className={s["form__sorting-container"]}>
                    {/* <!-- Сортировка --> */}
                    <label className={s["form__sorting-button"]} htmlFor="sort">
                        Популярные
                        <input onClick={(e) => handleClick(e)} type="radio" id="sort" name="recipes__sorting" value="popular" />
                    </label>
                    <label className={s["form__sorting-button"]} htmlFor="sort">
                        Новинки
                        <input onClick={(e) => handleClick(e)} type="radio" id="sort" name="recipes__sorting" value="news" />
                    </label>
                    <label className={s["form__sorting-button"]} htmlFor="sort">
                        Случайные
                        <input onClick={(e) => handleClick(e)} type="radio" id="sort" name="recipes__sorting" value="random" />
                    </label>

                    {/* <!-- Поисковая строка --> */}
                    <input className={s["form__search-input"]} type="text" placeholder="Заячьи уши в духовке по-мексикански" />
                    <input className={s["form__search-button"]} type="button" />
                </div>
                <div className={s["form__category-container"]}>
                    {/* <!-- Категории --> */}
                    <label className={s["form__category-button"]} htmlFor="tag">
                        Мясо
                        <input type="checkbox" id="tag" name="recipes__sorting" value="meat" />
                    </label>
                    <label className={s["form__category-button"]} htmlFor="tag">
                        Рыба
                        <input type="checkbox" id="tag" name="recipes__sorting" value="fish" />
                    </label>
                    <label className={s["form__category-button"]} htmlFor="tag">
                        Грибы
                        <input type="checkbox" id="tag" name="recipes__sorting" value="mushrooms" />
                    </label>
                    <label className={s["form__category-button"]} htmlFor="tag">
                        Овощи
                        <input type="checkbox" id="tag" name="recipes__sorting" value="vegetables" />
                    </label>
                    <label className={s["form__category-button"]} htmlFor="tag">
                        Фрукты
                        <input type="checkbox" id="tag" name="recipes__sorting" value="fruits" />
                    </label>
                    <label className={s["form__category-button"]} htmlFor="tag">
                        Ягоды
                        <input type="checkbox" id="tag" name="recipes__sorting" value="berries" />
                    </label>
                    <label className={s["form__category-button"]} htmlFor="tag">
                        Крупы
                        <input type="checkbox" id="tag" name="recipes__sorting" value="cereals" />
                    </label>
                    <label className={s["form__category-button"]} htmlFor="tag">
                        Молочное
                        <input type="checkbox" id="tag" name="recipes__sorting" value="milk" />
                    </label>
                    <label className={s["form__category-button"]} htmlFor="tag">
                        Соусы
                        <input type="checkbox" id="tag" name="recipes__sorting" value="sauce" />
                    </label>
                    <label className={s["form__category-button"]} htmlFor="tag">
                        Мучное
                        <input type="checkbox" id="tag" name="recipes__sorting" value="flour" />
                    </label>
                    <label className={s["form__category-button"]} htmlFor="tag">
                        Соки
                        <input type="checkbox" id="tag" name="recipes__sorting" value="juice" />
                    </label>
                    <label className={s["form__category-button"]} htmlFor="tag">
                        Алкоголь
                        <input type="checkbox" id="tag" name="recipes__sorting" value="alcohol" />
                    </label>
                </div>
            </fieldset>
        </form>
    );
}

export default RecipeForm;