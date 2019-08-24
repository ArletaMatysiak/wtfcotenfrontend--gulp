const welcome = (name, week) => {
    console.log (`Cześć ${name}, to Twój ${week} tydzień z WTF.`)
}

const myName = 'Arli';
const myWeek = 6;

welcome (myName, myWeek); 



const navigationSwitcher = document.querySelector('.navigation__switcher--js');
const navigationList = document.querySelector('.navigation__list--js');


navigationSwitcher.addEventListener('click', (e) => {
    console.log("toggle");
navigationList.classList.toggle('navigation__list--visible');
});
    


const button = document.querySelector('.article-button--js');
console.log(button)

function oknoAlert () {
    alert('w budowie');
}


document.querySelector('.navigation__link--js').addEventListener('click', function () {
    oknoAlert();
});



button.addEventListener('click', (e) => {
const header = document.querySelector('.article-about__title--js');
header.innerHTML = 'tytuł2';
header.classList.toggle('article-about__title--yellow')
if (header.classList.contains('article-about__title--yellow')) {
    console.log('jest klasa');
} else { 
    console.log('nie ma klasy');
}
});




