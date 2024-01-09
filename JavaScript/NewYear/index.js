/**
 * @author Vedansh Khandelwal
 * @language Javascript ES6+
 * @description New year wishes for important peoples.
 * @since 2024
 */
const url = `https://images.wallpapersden.com/image/download/new-year-4k-2023_bW1qZ22UmZqaraWkpJRramVlrWloZ24.jpg`;
var person = '';

function button () {
    setTimeout(() => {
        document.body.innerHTML = ``
        const primary = document.getElementById('primary');
        primary.remove();
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
        handleError();
    }
    if (person.length <= 3 || person.length == 0 ) {
        handleError();
    }
    else {
        handleSuccess(person);
    }
    // document.querySelector('.container').style.boxShadow = ``;
}

/**
 * @special for Special Person.
 */
window.addEventListener('keydown', (event) => {
    if ( event.code === 'KeyS') {
        const verify = confirm("Is this you ? ");
        if (verify) {
            const auth = prompt(`Verify your identity then`);
            if (auth == 'letmein' || auth == "itsme" || auth == 7474784) {
                setTimeout(() => {
                    document.title = `❤️ Shristi - Happy New Year | Specially For You.`
                    alert(`Access Granted.`);
                    document.querySelector('.container').innerHTML = `<h1><span class='name'>${capitalize('Shristi')}</span></h1>
                    <div class='svg'>
                    <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 456.081"><path fill="#F44336" d="M253.648 83.482c130.392-219.055 509.908 65.493-.513 372.599-514.788-328.941-101.874-598.696.513-372.599z"/><path fill="#C62828" d="M344.488 10.579c146.331-39.079 316.84 185.128-65.02 429.134 282.18-224.165 190.925-403.563 65.02-429.134zM121.413.646c48.667-4.845 100.025 17.921 129.336 76.929 1.259 3.71 2.44 7.571 3.537 11.586 10.541 34.29.094 49.643-12.872 50.552-18.136 1.271-20.215-14.85-24.966-27.643C192.689 48.096 158.774 12.621 116.43 1.863c1.653-.435 3.314-.841 4.983-1.217z"/><path fill="#FF847A" d="M130.558 35.502C87.9 31.255 42.906 59.4 31.385 101.568c-7.868 25.593-.07 37.052 9.607 37.731 13.537.949 15.088-11.084 18.634-20.632 17.733-47.749 43.046-74.227 74.651-82.257a104.925 104.925 0 00-3.719-.908z"/></svg>
                    </div>
                    <br> ❤️ ❤️ <br> <h1>Happy New Year.</h1>`;
                }, 1000)
            }
            else{
                alert(`Access Denied.`);
                alert(`Good Luck !`);
            }
        }
    }
});



document.querySelector('button').addEventListener('click', button);
document.addEventListener('DOMContentLoaded', celebrate);