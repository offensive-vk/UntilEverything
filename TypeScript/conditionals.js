/*
* Copyright (c) by Vedansh
*/
var log = console.log;
log("\n\t Second Typescript Program !!\n\t");
log("================================\n");
var num1 = 423423;
var num2 = 103423;
var res = num1 * num2 + num1 / num2 - num1 % num2;
if (res <= 99999999) {
    log("less than equal to 9999");
}
else if (res >= 99999999) {
    log("greater than equal to 9999");
}
else {
    log("Undesired Result lol!");
}
log("Result is " + res);
log("================================\n");
log("\n End of Program !!\n\t");
// Loops in TypeScript
//for.. in loop
var arr = [124, 543, 311, 781, 500];
for (var i in arr) {
    log(arr[i] + " ");
}
log("================================\n");
// String array for .. of loop
var names = ["Rahul", "Manish", "Rupesh", "Payal", "Sneha"];
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    log("My name is " + name_1);
}
log("================================\n");
// for classic loop
var games = ["Hockey", "Cricket", "Football", "Rugby", "Chess"];
for (var i = 0; i < games.length; i++) {
    log("" + games[i]);
}
