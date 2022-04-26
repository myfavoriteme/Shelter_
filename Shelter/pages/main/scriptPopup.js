let burger = document.querySelector('.burger'),
    cards = document.querySelectorAll('.pets_card'),
    body = document.querySelector('.body'),
    popup = document.createElement('div'),
    popupArticle = document.createElement('article'),
    popupText = document.createElement('article'),
    popupBackground = document.createElement('div'),
    popButton = document.createElement('div'),
    popImg = document.createElement('img'),
    popupImg = '';
    popupText = '';
    

alert('Здравствуйте! Я еще не успел доделать работу. Буду безумно благодарен, если у Вас получится проверить ее завтра. Спасибо.');

burger.addEventListener('click', function openNavigation() {
    burger.classList.toggle('burger_rotate');
    document.querySelector('.overlay').classList.toggle('overlay_burger');
    document.querySelector('.body').classList.toggle('body_hiden');
    document.querySelector('.menu').classList.toggle('menu_burger');
    document.querySelector('.menu').classList.toggle('transform-left');
    document.querySelector('.menu').classList.toggle('transform-right');
    document.querySelector('.menu').classList.add('display_block');
    
});

// Open popup

cards.forEach(b=>b.addEventListener('click', function showPopup() {
    document.querySelector('.overlay').classList.add('overlay_burger');
    document.querySelector('.body').classList.add('body_hiden');
    createPopap()
    let a = b.target
    console.log(a);
}));

// Close popup

popButton.onclick = function() {
    deletePopup();
}
// ?????.onclick = function() {
//     deletePopup();
// }
function deletePopup(params) {
    document.querySelector('.overlay').classList.remove('overlay_burger');
    document.querySelector('.body').classList.remove('body_hiden');
    popupBackground.remove();
}

function createElements(el, parrent, style) {
    
    parrent.append(el);

    el.classList.add(style);
}

function createPopap() {


    

    // body.append(popupBackground);
    // popupBackground.append(popup);
    // popup.append(popupArticle);
    // popup.append(popButton);
    

    // popup.classList.add('popup');
    // popupArticle.classList.add('popup_article');
    // popupBackground.classList.add('popup_background');
    
    createElements(popupBackground, body, 'popup-background')
    createElements(popup, popupBackground, 'popup')
    createElements(popupArticle, popup, 'popup_article')
    
    createElements(popButton, popup, 'popup_button')
    createElements(popImg, popButton, 'pop_img');

    // createElements(popupImg, popupArticle, 'popup_img');
    // createElements(popupText, popupArticle, 'popup_text');

    popImg.src = '../../assets/icons/x.svg';
}

