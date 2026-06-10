import s from './RecipeList.module.css';


import RecipeCard from '../RecipeCard/RecipeCard';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function RecipeList({ ...props }) {

    return (
        <div>
            {/* <!-- Длина списка рецептов --> */}
            <span className={s["article-count"]}>{props.recipeCards.length} рецепта(-ов) было найдено по данному запросу:</span>
                
                <ul className={s["article-list"]}>
                    {/* <!-- Карточка рецепта --> */}
                        {props.recipeCards.map(card =>    
                            <RecipeCard card={card} key={card.id} />
                        )}
                </ul>
            
        </div>
    );
}

export default RecipeList;