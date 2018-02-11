import './scss/base.scss';

const header = document.querySelector('h1');

console.log( header );

function runClick(e){
    alert( `Clicked: ${e.target}` );
}

header.addEventListener('click', e => {console.log(e.target)});