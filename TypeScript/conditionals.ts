/* 
* Copyright (c) by Vedansh 
*/
const log = console.log;
log("\n\t Second Typescript Program !!\n\t");
log("================================\n");

let num1 : number = 423423;
let num2 : number = 103423;
let res: number = num1 * num2 + num1 / num2 - num1 % num2;

    if(res <= 99999999){
        log("less than equal to 9999");
    }else if(res >= 99999999){
        log("greater than equal to 9999");
    }else{
        log("Undesired Result lol!");
    }

log("Result is " + res);
log("================================\n");
log("\n End of Program !!\n\t");

// Loops in TypeScript
//for.. in loop
const arr: number[] = [124,543,311,781,500];
for (let i in arr){
    log(arr[i]+" ");
}

log("================================\n");

// String array for .. of loop
const names: string[] = ["Rahul","Manish", "Rupesh", "Payal", "Sneha"];
let i = 0;
for(let name of names){
    i++;
    log(i+". "+ name);
}

log("================================\n");

// for classic loop
const games: string[] = ["Hockey", "Cricket", "Football", "Rugby", "Chess"];

log(":: Some Games ::\n");
for(let i = 0; i < games.length; i++){
    log(i+". "+games[i]);
}
log("================================\n");
