import s from "./Main.module.css"
import landingImage from "../../images/header__image.png"
import Slider from "../../Slider/Slider"

function Main() {

  return (
    <main className={[s["landing__container"], "container"].join(' ')}>
      <section className={s["landing__header"]}>
        <h1>Очень синий</h1>
        <h1>Сайт с рецептами</h1>
      </section>
      {/* Списки */}
      <section className={s["landing__main"]}>
        <img className={s["landing__image"]} src={landingImage} alt="landing main img" />
        <ul className={[s["landing__list"], s["left-top"]].join(' ')}>
          <li><a href="#">Закуски</a></li>
          <li><a href="#">Первые блюда</a></li>
          <li><a href="#">Вторые блюда</a></li>
          <li><a href="#">Полдник</a></li>
          <li><a href="#">Гарниры</a></li>
          <li><a href="#">Десерты</a></li>
          <li><a href="#">Напитки</a></li>
        </ul>
        <ul className={[s["landing__list"], s["left-bottom"], s["blue"]].join(' ')}>
          <li><a href="#">Франция</a></li>
          <li><a href="#">Россия</a></li>
          <li><a href="#">Италия</a></li>
          <li><a href="#">Беларусь</a></li>
          <li><a href="#">Япония</a></li>
          <li><a href="#">Корея</a></li>
          <li><a href="#">Китай</a></li>
        </ul>
        <ul className={[s["landing__list"], s["right-top"]].join(' ')}>
          <li><a href="#">Мясные блюда</a></li>
          <li><a href="#">Рыбные блюда</a></li>
          <li><a href="#">Овощные блюда</a></li>
          <li><a href="#">Блюда из круп</a></li>
          <li><a href="#">Молочные блюда</a></li>
        </ul>
        <ul className={[s["landing__list"], s["right-bottom"], s["blue"]].join(' ')}>
          <li><a href="#">Закуски</a></li>
          <li><a href="#">Первые блюда</a></li>
          <li><a href="#">Вторые блюда</a></li>
          <li><a href="#">Грарниры</a></li>
          <li><a href="#">Десерты</a></li>
          <li><a href="#">Напитки</a></li>
        </ul>
      </section>
      {/* Переход к карточкам блюд */}
      <section className={s["landing__transition"]}>
        <h2 className={s["transition__title"]}>
          boulette — в переводе с французского «пельмень»
        </h2>
        <p className={s["transition__text"]}>
          французское слово, означающее небольшой шарик, комочек или фрикадельку, <br />
          часто используемое в кулинарии для обозначения мясных, <br />
          рыбных или овощных тефтелей.
        </p>
      </section>
      {/* Раздел с карточками */}
      <section className={s["landing__original-recipes"]}>
        <h2 className={s["original-recipes__title"]}>Авторские блюда</h2>
        {/* Слайдер */}
        <Slider />
      </section>
    </main>
  );
}

export default Main;