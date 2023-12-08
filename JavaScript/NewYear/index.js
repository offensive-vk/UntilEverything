const url = `https://images.wallpapersden.com/image/download/new-year-4k-2023_bW1qZ22UmZqaraWkpJRramVlrWloZ24.jpg`;
var person = '';

async function button () {
    setTimeout(() => {
        document.body.innerHTML = ``
        document.body.style.backgroundImage = `url('newyear.jpg')`;
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize = 'cover';
    }, 500)
}
function capitalize(inputString) {
    const words = inputString.split(' ');
    const capitalizedWords = words.map(word => {
        const capitalizedFirstLetter = word.charAt(0).toUpperCase();
        return capitalizedFirstLetter + word.slice(1);
    });

    const resultString = capitalizedWords.join(' ');

    return resultString;
}
function handleError() {
    document.body.innerHTML = `Oops Something isn't right. <br> Try Refreshing The Page..`;
    document.body.style.backgroundColor = '#000';
    document.body.style.color = '#fff';
    document.body.style.fontSize = '6rem';
}
function handleSuccess(person) {
    alert(`Yay! 🎉 Happy New Year! ${capitalize(person)}`);
    const h1 = document.querySelector('h1');
    h1.innerHTML = `Wishing you a very very Happy New Year !! <br>
    <span class='name'>${capitalize(person)}</span>`;
    document.body.style.display = 'grid';
}
function celebrate() {
    // document.body.style.display = 'none';
    var person = prompt("Can I See Your Beautiful Name ?")
    if (person === null) {
        handleError()
    }
    if (person.length <= 3 || person.length == 0 ) {
        handleError();
    }
    else {
        handleSuccess(person);
    }
}

document.querySelector('button').addEventListener('click', button);
document.addEventListener('DOMContentLoaded', celebrate);