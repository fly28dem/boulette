// Находим нужный элемент для скролла без шифта
const slider = document.getElementsByClassName("original-recipes__container")[0];

// При прокрутки колёсика, плавно двигаем скрол, примагничивание через css
slider.addEventListener("wheel", (e) => {
    e.preventDefault();

    if (event.deltaY < 0) {

        slider.scrollBy({
            left: event.deltaY,
            behavior: 'smooth',
        });
        console.log('Право')

    } else if (event.deltaY > 0) {
        
        slider.scrollBy({
            left: event.deltaY,
            behavior: 'smooth',
        });
        console.log('Лево')
    }
});
