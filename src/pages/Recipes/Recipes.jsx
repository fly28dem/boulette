import s from "./Recipes.module.css";
import RecipeList from "../../RecipeList/RecipeList";
import RecipeFilter from "../../RecipeForm/RecipesForm";

function Recipes() {

    return (
        <main className={[s["recipes__container"], "container"].join(' ')}>
            <section>
                <RecipeFilter />
            </section>
            <section>
                {/* <!-- Список рецептов --> */}
                <RecipeList />
                {/* <ul className={s["recipes__pagination"]}>
                    <li className={s["pagination__item"]}>1</li>
                    <li className={s["pagination__item"]}>2</li>
                    <li className={s["pagination__item"]}>3</li>
                    <li className={s["pagination__item"]}>4</li>
                    <li className={s["pagination__item"]}>5</li>
                    <li className={s["pagination__item"]}>6</li>
                    <li className={s["pagination__item"]}>7</li>
                    <li className={s["pagination__item"]}>8</li>
                    <li className={s["pagination__item"]}>9</li>
                    <li className={s["pagination__item"]}>10</li>
                    <li className={s["pagination__item"]}>11</li>
                    <li className={s["pagination__item"]}>12</li>
                    <li className={s["pagination__item"]}>13</li>
                    <li className={s["pagination__item"]}>14</li>
                    <li className={s["pagination__item"]}>15</li>
                    <li className={s["pagination__item"]}>16</li>
                </ul> */}
            </section>
        </main>
    );
}

export default Recipes;