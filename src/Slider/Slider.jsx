import s from "../pages/Main/Main.module.css"
import coctaileImage from "../images/coctaile_forcard.png"
import aimantImage from "../images/aimant_forcard.png"
import bouletteavesnesImage from "../images/bouletteavesnes_forcard.png"
import mushroomsImage from "../images/mushroom_forcard.png"
import OriginalRecipeCard from "../OriginalRecipeCard/OriginalRecipeCard"
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
            image: coctaileImage,
            description: "Традиционное блюдо грузинской кухни, представляющее собой сочного жареного цыпленка, запеченного в насыщенном сливочно-чесночном соусе. Родом оно из горного региона Рача (село Чкмера), славится невероятным ароматом и ярким вкусом.",
            time: 0,
            type: "Освновное блюдо"
        },
        {
            id: 6,
            title: 'Карпаччо',
            image: aimantImage,
            description: 'Изысканная итальянская холодная закуска, представляющая тончайшие, прозрачные ломтики сырой говядины. Блюдо подается не подвергаясь термической обработке, и ценится за мягкую текстуру, которая тает во рту.',
            time: 0,
            type: "Закуски"
        },
        {
            id: 7,
            title: 'Устрицы с лимонным соком',
            image: bouletteavesnesImage,
            description: "Классическое, изысканное блюдо средиземноморской и французской кухни из живых моллюсков, подаваемых на льду, и сочных долек лимона. Это эталонная закуска, ценящаяся за деликатный вкус моря, свежесть и утонченную простоту.",
            time: 0,
            type: "Закуски"
        },
        {
            id: 8,
            title: 'Смузи-боул «Голубь»',
            image: mushroomsImage,
            description: "Густой, питательный и красивый десерт-завтрак, который состоит из двух частей: ягодной основы, взбитой до кремовой текстуры, и аппетитных топпингов, которые добавляют приятный контраст текстур.",
            time: 0,
            type: "Закуски"
        },
        {
            id: 9,
            title: 'Айс матча латте',
            image: mushroomsImage,
            description: "Утонченный прохладительный напиток, рожденный на стыке многовековых японских традиций и современной кофейной культуры. В его основе лежит церемониальный зеленый чай маття.",
            time: 0,
            type: "Напитки"
        },
        {
            id: 10,
            title: 'Сердце Самурая',
            image: mushroomsImage,
            description: "В основе этого шедевра лежит изысканная философия японского минимализма, переосмысленная через призму высокой кухни. Главный герой блюда — филе премиального тихоокеанского тунца.",
            time: 0,
            type: "Основное блюдо"
        },
        {
            id: 11,
            title: 'Хрустящие баклажаны',
            image: mushroomsImage,
            description: "Ресторанный хит, представляющий собой идеальный баланс текстур и вкусов. В нем сочетаются горячая, хрустящая корочка овощей, сладость свежих томатов, нежность сливочного сыра и пикантная азиатская заправка.",
            time: 0,
            type: "Салаты"
        },
        {
            id: 12,
            title: 'Мидии в сливочном соусе',
            image: mushroomsImage,
            description: "Изысканное, но при этом простое в приготовлении блюдо средиземноморской кухни. Оно представляет собой нежные морские моллюски, тушеные в густой, бархатистой сливочно-чесночной подливке с добавлением зелени и специй.",
            time: 0,
            type: "Закуски"
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