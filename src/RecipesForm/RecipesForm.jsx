import { useState } from "react";
import s from "./RecipesForm.module.css";
import Sort from "../UI/Sort/Sort";

function RecipeForm({...props}) {

    const [selectedSort, setSelectedSort] = useState('')
    let recipeList = props.recipeCards

    const sortRecipes = (sort) => {
        setSelectedSort(sort);
        if (sort == 'views') {
            props.setRecipeCards([...props.recipeCards.sort((a, b) => b[sort] - a[sort])])
        }
        else if (sort == 'date') {
            props.setRecipeCards([...props.recipeCards.sort((a, b) => b[sort] - a[sort])])
        }
        else if (sort == 'random') {
            props.setRecipeCards([...props.recipeCards.sort(() => Math.random() - 0.5)])
        }
        
    }

    return (
        <form className={s["recipes__form"]} action="">
            <fieldset>
                <legend className={s["form__title"]}>Открытая база рецептов</legend>
                <div className={s["form__sorting-container"]}>
                    {/* <!-- Сортировка --> */}
                    <Sort
                        value={selectedSort}
                        onClick={sortRecipes}
                        options={[
                            {value: 'views', name: 'Популярные'},
                            {value: 'date', name: 'Новинки'},
                            {value: 'random', name: 'Случайные'},
                        ]}
                    />

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