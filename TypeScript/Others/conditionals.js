/*
* Copyright (c) by Vedansh
*/
// Conditionals and loops in TypeScript
var log = console.log;
log("\n\t :: Second Typescript Program !!\n\t");
log("================================\n");
var num1 = 464348;
var num2 = 100823;
var res = num1 * num2 - num1 % num2;
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
log("================================");
log("\n End of Conditionals !!\n\t");
var isMailSent = true;
if (isMailSent) {
    log('Mail sent to recipient');
}
// Loops in TypeScript
// for.. in loop
var arr = [124, 543, 311, 781, 500];
for (var i_1 in arr) {
    log(i_1 + ". " + arr[i_1] + " ");
}
log("================================\n");
// String array for .. of loop
var names = ["Rahul", "Manish", "Rupesh", "Payal", "Sneha"];
var i = 0;
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    i++;
    log(i + ". " + name_1);
}
log("================================\n");
// for classic loop
var games = ["Hockey", "Cricket", "Football", "Rugby", "Chess"];
log(":: Some Games ::\n");
for (var i_2 = 0; i_2 < games.length; i_2++) {
    log(i_2 + ". " + games[i_2]);
}
log("\n================================\n");
// foreach loop
arr.forEach(function (element) {
    log(":: " + element);
});
log("\n================================\n");
log("\n End of Program !!\n\t");
// while (condition) {
//     // code block to be executed
// }
i = 0;
while (i < 50) {
    log(i);
    i++;
}
