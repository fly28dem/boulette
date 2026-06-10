// имфорт изображений
import coctaileImage from "../images/coctaile_forcard.png";
import aimantImage from "../images/aimant_forcard.png";
import bouletteavesnesImage from "../images/bouletteavesnes_forcard.png";
import mushroomsImage from "../images/mushroom_forcard.png";
import originalRecipeChkmeruli from "../images/originalRecipe__chkmerulli.png";
import originalRecipeKarpacho from "../images/originalRecipe__karpacho.png";
import originalRecipeUstrici from "../images/originalRecipe__ustrici.png";
import originalRecipeChai from "../images/originalRecipe__chai.png";

import s from "../pages/Main/Main.module.css";
import OriginalRecipeCard from "../OriginalRecipeCard/OriginalRecipeCard";
import { useEffect } from "react";

function Slider({ ...props }) {

    const originalCards = [
        {
            id: 1,
            title: 'Коктейль «Ягодный блюз»',
            image: coctaileImage,
            description: "Глубокий фиолетовый цвет, рожденный соком спелой шелковицы. Тягучий джазовый ритм в каждом глотке прохладного джина. Тонкий баланс лесной сладости и едва уловимой кислинки лимона. Этот коктейль — музыка, которую можно почувствовать на вкус.",
            time: 60,
            type: "Напитки"
        },
        {
            id: 2,
            title: 'Салат «Aimant»',
            image: aimantImage,
            description: 'Салат "Aimant" оправдывает свое название — он притягивает взгляды своей свежестью инеобычным декором. Лазурные цветы бораго придают ему изысканный вид и тонкий свежий аромат.',
            time: 75,
            type: "Салаты"
        },
        {
            id: 3,
            title: 'Boulette «d`AvesnesAlt»',
            image: bouletteavesnesImage,
            description: "Традиционный шедевр с севера Франции, узнаваемый по своей дерзкой конусообразной форме. Огненная корочка из паприки обладает мощным, острым характером и густым ароматом, который невозможно забыть.",
            time: 840,
            type: "Молочные продукты"
        },
        {
            id: 4,
            title: 'Грибы «Эноки Korea"',
            image: mushroomsImage,
            description: "Хрустящие грибы эноки в объятиях сочного бекона под глянцевой глазурью. Идеальный баланс пряного соуса и кунжута.. «Эноки Korea» — это маленькое гастрономическое приключение на вашей тарелке.",
            time: 15,
            type: "Грибы"
        },
        {
            id: 5,
            title: 'Цыпленок «Чкмерули»',
            image: originalRecipeChkmeruli,
            description: "Традиционное блюдо грузинской кухни, представляющее собой сочного жареного цыпленка, запеченного в насыщенном сливочно-чесночном соусе. Родом оно из горного региона Рача (село Чкмера), славится невероятным ароматом и ярким вкусом.",
            time: 0,
            type: "Освновное блюдо"
        },
        {
            id: 6,
            title: 'Карпаччо',
            image: originalRecipeKarpacho,
            description: 'Изысканная итальянская холодная закуска, представляющая тончайшие, прозрачные ломтики сырой говядины. Блюдо подается не подвергаясь термической обработке, и ценится за мягкую текстуру, которая тает во рту.',
            time: 0,
            type: "Закуски"
        },
        {
            id: 7,
            title: 'Устрицы с лимонным соком',
            image: originalRecipeUstrici,
            description: "Классическое, изысканное блюдо средиземноморской и французской кухни из живых моллюсков, подаваемых на льду, и сочных долек лимона. Это эталонная закуска, ценящаяся за деликатный вкус моря, свежесть и утонченную простоту.",
            time: 0,
            type: "Закуски"
        },
        {
            id: 9,
            title: 'Айс матча латте',
            image: originalRecipeChai,
            description: "Утонченный прохладительный напиток, рожденный на стыке многовековых японских традиций и современной кофейной культуры. В его основе лежит церемониальный зеленый чай маття.",
            time: 0,
            type: "Напитки"
        },
        
    ]

    // UseEffect для использования нативного обработчика с preventDefault
    useEffect (() => {
        const slider = document.getElementsByClassName(s["original-recipes__container"])[0]

        console.log(slider)

        // При прокрутки колёсика, плавно двигаем скрол, примагничивание через css
        const horizontalScroll = (e) => {
            e.preventDefault();

            console.log("Функция работает")

            if (e.deltaY < 0) {

                slider.scrollBy({
                    left: e.deltaY,
                    behavior: "smooth",
                });
                console.log("Право")
                console.log(e)

            } else if (e.deltaY > 0) {

                slider.scrollBy({
                    left: e.deltaY,
                    behavior: "smooth",
                });
                console.log("Лево")
                console.log(e)
            }
        }

        slider.addEventListener("wheel", horizontalScroll, { passive: false });

    }, []);

return (
    <div {...props} className={s["original-recipes__container"]}>
        <ul className={s["original-recipes__slider"]}>
            {/* Карточка */}
            {originalCards.map(card =>
                <OriginalRecipeCard card={card} key={card.id} />
            )}
        </ul>
    </div>
);
}

export default Slider;