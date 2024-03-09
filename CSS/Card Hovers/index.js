const fs = require('fs');

document.querySelector(".btn").addEventListener("click", () => {
    var oldValue = '';
    fs.readFile('index.css', 'utf-8', (err, data) => {
        if(err) throw err;
        oldValue = data;
    });
    var newValue = '';
    fs.readFile('card.css', 'utf-8', (err, data) => {
        if(err) throw err;
        newValue = data;
    });

    fs.writeFile('index.css', newValue, 'utf-8', (err) => {
        if (err) throw err;
    });
})