const url = `https://images.wallpapersden.com/image/download/new-year-4k-2023_bW1qZ22UmZqaraWkpJRramVlrWloZ24.jpg`;
var person = '';

function button () {
    setTimeout(() => {
        document.body.innerHTML = ``
        const css = document.createElement('style');
        css.type = 'text/css';
        css.innerHTML = `
        body{
            background-image: url('newyear.jpg');
            background-position: center;
            background-repeat: no-repeat;
            background-size: 100% 100%;
            height: 100vh;
            display: flex;
            overflow: hidden;
        } `;
        document.head.append(css);
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
    document.title = `${capitalize(person)} , Happy New Year ! `;
    const link = document.createElement('link');
    link.className = 'logo-icon heart';
    link.rel = 'icon';
    link.type = 'image/svg+xml';
    link.href = 'heart.svg';
    document.head.append(link);

    alert(`Yay! 🎉 Happy New Year! ${capitalize(person)}`);
    const h1 = document.querySelector('h1');
    h1.innerHTML = `Wishing You A Very Very Happy New Year ! <br>
    <span class='name'>${capitalize(person)}</span>`;
    document.body.style.display = 'grid';
}
function celebrate() {
    document.body.style.opacity = 0;
    var person = prompt("Your Beautiful Name ?")
    document.body.style.opacity = 1;
    if (person === null) {
        handleError()
    }
    if (person.length <= 3 || person.length == 0 ) {
        handleError();
    }
    else {
        handleSuccess(person);
    }
    // document.querySelector('.container').style.boxShadow = ``;
}

document.querySelector('button').addEventListener('click', button);
document.addEventListener('DOMContentLoaded', celebrate);