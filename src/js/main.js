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
    


const button = document.querySelector('.article___button--js');
console.log(button)

function oknoAlert () {
    alert('w budowie');
}


document.querySelector('.navigation__link--js').addEventListener('click', function () {
    oknoAlert();
});



button.addEventListener('click', (e) => {
const header = document.querySelector('.article__title--js');
header.innerHTML = 'klik, klik';
header.classList.toggle('article__title--red')
if (header.classList.contains('article__title--red')) {
    console.log('jest klasa');
} else { 
    console.log('nie ma klasy');
}
});




