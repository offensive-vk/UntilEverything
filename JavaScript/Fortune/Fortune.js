/* 
* @author <admin@offensive-vk.org>
* @isPrivate: true
* @lang : Vanilla JavaScript
* @description : It Tells your fortune or fate. Believe me or not.
*/
const fortune = [
    "Human",
    "RTX 3060",
    "Hitler",
    "Dirt bike",
    "Pizza",
    "Rainbow",
    "Mountain",
    "Guitar",
    "Coffee",
    "Beach",
    "Book",
    "Sunflower",
    "Moon",
    "Ice Cream",
    "Fireworks",
    "Camera",
    "Rain",
    "Football",
    "Your Death",
    "Music",
    "Star",
    "Chocolate",
    "You",
    "Neutron",
    "Undefined"
];
document.querySelector("h1").addEventListener("mouseover", function(event) {
    const curse = fortune[Math.floor(Math.random() * fortune.length)];
    this.innerHTML = `${curse} is cursed. `;
    if(curse == "Death") {
        this.style.color = "red";
        document.body.style.backgroundColor = "red";
        this.removeEventListener("mouseover");
    }
});
/**
 * Takes an input value from an HTML input field, performs a series of comparisons on the input value, and returns a corresponding result based on the comparisons.
 * 
 * @returns {string} The result of the comparisons.
 */
async function checkChoice() {
    const input = parseFloat(document.getElementById("inputField").value);
    let result = "";
    
        if (input >= 1.0 && input < 1.2) {
            result = "Human";
        } else if (input >= 1.2 && input < 1.5) {
            result = "RTX 3060";
        } else if (input >= 1.5 && input < 2.5) {
            result = "Hitler";
        } else if (input >= 2.5 && input < 3.0) {
            result = "Dirt bike";
        } else if (input >= 3.0 && input < 4.7) {
            result = "Pizza";
        } else if (input >= 4.7 && input < 5.2) {
            result = "Rainbow";
        } else if (input >= 5.2 && input < 6.9) {
            result = "Mountain";
        } else if (input >= 6.9 && input < 7.4) {
            result = "Guitar";
        } else if (input >= 7.4 && input < 8.1) {
            result = "Coffee";
        } else if (input >= 8.1 && input < 9.6) {
            result = "Beach";
        } else if (input >= 9.6 && input < 10.3) {
            result = "Book";
        } else if (input >= 10.3 && input < 11.8) {
            result = "Sunflower";
        } else if (input >= 11.8 && input < 12.5) {
            result = "Moon";
        } else if (input >= 12.5 && input < 13.2) {
            result = "Ice Cream";
        } else if (input >= 13.2 && input < 14.7) {
            result = "Fireworks";
        } else if (input >= 14.7 && input < 15.4) {
            result = "Camera";
        } else if (input >= 15.4 && input < 16.9) {
            result = "Rain";
        } else if (input >= 16.9 && input < 17.6) {
            result = "Football";
        } else if (input >= 17.6 && input < 18.3) {
            result = "Music";
        } else if (input >= 18.3 && input < 19.8) {
            result = "Star";
        } else if (input >= 19.8 && input <= 20.0) {
            result = "Chocolate";
        } else if(input == 99.9 && input <= 99.9){
            result = "Death";
        } else {
            result = "Undefined";
            console.log(result);
        }
        document.getElementById("result").innerHTML = result;
        return result;
}
document.getElementById('btn').addEventListener("click", async() => {
    const res = await checkChoice();
    var image = `${res.toLowerCase().replace(" ", "")}.jpg`;
    document.title = ` ${res} | Please Refresh To Do It Again !`;
    document.querySelector('.box').innerHTML = res;
    document.querySelector('.box').style.border = 'none'; 
    document.body.style.backgroundImage = `url(${image})`;
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundSize = 'cover';
    console.log(`${image}`);
});
window.addEventListener('keydown', (event) => {
    if (event.code === 'KeyS' && event.altKey && event.shiftKey) {
        const verify = confirm("Is this you ? ");
        if(verify){
            const auth = prompt(`Verify your identity then`);
            if(auth == 'letmein' || auth == "itsme" || auth == 7474784){
                alert(`Access Granted.`);
                document.querySelector('.box').innerHTML = `You are special. `;
                setTimeout(() => {
                    document.querySelector('.box').style.display = 'none';
                    document.title = 'Congratulations ! You Made It .';
                    document.body.style.backgroundImage = `url(special.jpg)`;
                    document.body.style.backgroundRepeat = 'no-repeat';
                    document.body.style.backgroundSize = `cover`;
                }, 3000);
            }
            else{
                alert(`Access Denied.`);
                alert(`Good Luck !`);
            }
        }
    }
});

