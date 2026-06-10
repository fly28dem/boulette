// изображения
import image1 from '../../images/burger-image.jpg';
import image2 from '../../images/Без названия.jpg';
import image3 from '../../images/Без названия (1).jpg';
import image4 from '../../images/Без названия (2).jpg';
import image5 from '../../images/Без названия (3).jpg';
import image6 from '../../images/Без названия (4).jpg';
import image7 from '../../images/images (2).jpg';
import image8 from '../../images/images.jpg';
import image9 from '../../images/images (1).jpg';
import grImage from '../../images/Без названия (5).jpg';
import twoImage from '../../images/images (3).jpg';
import ricImage from '../../images/images (4).jpg';
import twoRibImage from '../../images/images (5).jpg';
import tortImage from '../../images/images (6).jpg';
// флаги
import flagUs from '../../images/flags/us.png';
import flagBr from '../../images/flags/br.png';
import flagEe from '../../images/flags/ee.png';
import flagFr from '../../images/flags/fr.png';
import flagGr from '../../images/flags/gr.png';
import flagIn from '../../images/flags/in.png';
import flagIt from '../../images/flags/it.png';
import flagLt from '../../images/flags/lt.png';
import flagNo from '../../images/flags/no.png';
import flagRu from '../../images/flags/ru.png';
import flagSe from '../../images/flags/se.png';
import flagVat from '../../images/flags/vat.png';

import s from "./Recipes.module.css";
import RecipeList from "../../RecipeList/RecipeList";
import RecipeForm from "../../RecipesForm/RecipesForm";
import { useState } from 'react';

function Recipes() {

    const [recipeCards, setRecipeCards] = useState([{
        id: 1,
        title: 'Ароматные бургеры frogy-filling',
        description: 'Вы не найдёте ничего лучше на природе, когда закончился ваш поёк. Для начала вам нужно найти...',
        preview: image1,
        flag: flagUs,
        tags: ['US', 'Мясо', 'Перекус'],
        views: 20116,
        time: 80,
        date: new Date(2026, 12, 3)
    },
    {
        id: 2,
        title: 'Кабачки',
        description: 'Готовятся очень просто, вам всего лишь нужно взять и приготовить.',
        preview: image2,
        flag: flagFr,
        tags: ['FR', 'Овощи', 'Ужин'],
        views: 2023,
        time: 25,
        date: new Date(2024, 5, 16)
    },
    {
        id: 3,
        title: 'Лиса-овсянка',
        description: 'Обстрегите лису, покрошите в овсянку, и у вас...',
        preview: image3,
        flag: flagNo,
        tags: ['NO', 'Мясо', 'Перекус'],
        views: 101373,
        time: 40,
        date: new Date(2026, 12, 2)
    },
    {
        id: 4,
        title: 'Картошка с нейро-рыбой',
        description: 'Чтоб сделать, нужно только да и только...',
        preview: image4,
        flag: flagIn,
        tags: ['IN', 'Рыба', 'Обед'],
        views: 711,
        time: 35,
        date: new Date(2023, 3, 15)
    },
    {
        id: 5,
        title: 'Пицца на сковороде',
        description: 'Не хочется мыть сковородку после завтрака?',
        preview: image5,
        flag: flagIt,
        tags: ['IT', 'Выпечка', 'Ужин'],
        views: 344546,
        time: 60,
        date: new Date(2026, 6, 19)
    },
    {
        id: 6,
        title: 'Самса из чайки',
        description: 'Список небольшой: 1) Наловите ведро птиц...',
        preview: image6,
        flag: flagBr,
        tags: ['BR', 'Птица', 'Сытное'],
        views: 95677,
        time: 140,
        date: new Date(2025, 3, 1)
    },
    {
        id: 7,
        title: 'Греческий пирожок',
        description: ' Греция предлагает получить незабываемый опыт...',
        preview: grImage,
        flag: flagGr,
        tags: ['GR', 'Пирожки', 'Перекус'],
        views: 511765,
        time: 45,
        date: new Date(2023, 7, 3)
    },
    {
        id: 11,
        title: 'Дети котлет',
        description: 'Любите ягнят? Я не очень, но для тех кто любит, мы подготовили...',
        preview: image9,
        flag: flagUs,
        tags: ['US', 'Мясо', 'Креатив'],
        views: 993550,
        time: 5,
        date: new Date(2026, 11, 6)
    },
    {
        id: 8,
        title: 'Армия пельменей',
        description: 'Сколько вы можете съесть за раз? Можете не...',
        preview: image7,
        flag: flagRu,
        tags: ['RU', 'Популярно', 'Ужин'],
        views: 1344098,
        time: 210,
        date: new Date(2019, 1, 24)
    },
    {
        id: 81,
        title: 'Салат 2 яйца',
        description: 'Не знаете что делать с яйцами в холодильнике? :P',
        preview: twoImage,
        flag: flagLt,
        tags: ['LT', 'Популярно', 'Завтрак'],
        views: 4233,
        time: 15,
        date: new Date(2026, 0, 11)
    },
    {
        id: 82,
        title: 'Рыцарская похлёбка',
        description: '16 перцев выросло на огороде, Милорд!',
        preview: ricImage,
        flag: flagSe,
        tags: ['SE', 'Рыцари', 'Завтрак'],
        views: 24233,
        time: 20,
        date: new Date(2021, 5, 5)
    },
    {
        id: 9,
        title: 'Рыба-капитан',
        description: 'Когда в последний раз вы играли в русскую рыбалку?',
        preview: image8,
        flag: flagRu,
        tags: ['RU', 'Жарка', 'Рыбалка'],
        views: 34231,
        time: 60,
        date: new Date(2025, 2, 28)
    },
    {
        id: 55,
        title: 'Двойной рыб',
        description: 'Рыба-капитан уже надоела? Или вы её недоели? Вам поможет двойной рыб!',
        preview: twoRibImage,
        flag: flagEe,
        tags: ['EE', 'Мясо', 'Креатив'],
        views: 18246,
        time: 150,
        date: new Date(2025, 3, 12)
    },
    {
        id: 90,
        title: 'Шоколадник',
        description: 'Если вы любите какао, тогда вам подойдёт прекрасный выбор: этот торт наивкуснейший, какой только можно представить в голове!',
        preview: tortImage,
        flag: flagFr,
        tags: ['FR', 'Сладкое', 'Шоколад'],
        views: 211358,
        time: 180,
        date: new Date(2024, 9, 17)
    }
])

    return (
        <main className={[s["recipes__container"], "container"].join(' ')}>
            <section>
                <RecipeForm recipeCards={recipeCards} setRecipeCards={setRecipeCards} />
            </section>
            <section>
                {/* <!-- Список рецептов --> */}
                <RecipeList recipeCards={recipeCards} />
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