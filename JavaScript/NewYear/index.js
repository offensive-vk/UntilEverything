const url = `https://images.wallpapersden.com/image/download/new-year-4k-2023_bW1qZ22UmZqaraWkpJRramVlrWloZ24.jpg`;

function handleError() {
    document.body.style.backgroundColor = '#000';
    document.body.style.color = '#fff';
    document.body.style.fontSize = '10rem';
    document.body.innerHTML = `Oops Something isn't right. <br> Try Refreshing The Page..`;
}
function celebrate() {
    // document.body.style.display = 'none';
    var name = prompt("Please Enter Your Beautiful Name.")
    if(name.length >= 3 || name.length == 0) {
        handleError();
    }
    else {
        alert(`Yay! 🎉 Happy New Year! ${name}`);
        const h1 = document.querySelector('h1');
        h1.innerHTML = `Wishing you a very very Happy New Year !! <br>
        <span class='name'>${capitalize(name)}</span>`;
        document.body.style.display = 'grid';
    }
}
async function load(url) {  
    const img = await fetch(url)
    return img;
}
async function button () {
    await load(url);
    setTimeout(() => {
        document.body.innerHTML = ``
        document.body.style.backgroundImage = `url(${url})`;
    }, 1500)
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

document.querySelector('button').addEventListener('click', button);
document.addEventListener('DOMContentLoaded', celebrate);