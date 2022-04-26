let burger = document.querySelector('.burger'),
    cards = document.querySelectorAll('.pets_card');

alert('Здравствуйте! Я еще не успел доделать работу. Буду безумно благодарен, если у Вас получится проверить ее завтра. Спасибо.')

burger.addEventListener('click', function openNavigation() {
    burger.classList.toggle('burger_rotate');
    document.querySelector('.overlay').classList.toggle('overlay_burger');
    document.querySelector('.body').classList.toggle('body_hiden');
    document.querySelector('.menu').classList.toggle('menu_burger');
    document.querySelector('.menu').classList.toggle('transform-left');
    document.querySelector('.menu').classList.toggle('transform-right');
    document.querySelector('.menu').classList.add('display_block');
    
});

cards.forEach(b=>b.addEventListener('click', function showPopup() {
    document.querySelector('.overlay').classList.toggle('overlay_burger');
    document.querySelector('.body').classList.toggle('body_hiden');
    createPopap()
}));

function createPopap() {
    let popup = document.createElement('div');
    let popupArticle = document.createElement('article');
    let popupText = document.createElement('article');
    let body = document.querySelector('.body');

    body.append(popup);
    popup.append(popupArticle);

    popup.classList.add('popup');
    popupArticle.classList.add('popup_article');

}