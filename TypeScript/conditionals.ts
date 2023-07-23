/* 
* Copyright (c) by Vedansh 
*/
const log = console.log;
log("\n\t Second Typescript Program !!\n\t");
log("================================\n");

let num1 : number = 423423;
let num2 : number = 103423;
let res: number = num1 * num2 + num1 / num2 - num1 % num2;

    if(res <= 9999){
        log("less than equal to 9999");
    }else if(res >= 9999){
        log("greater than equal to 9999");
    }else{
        log("Undesired Result lol!");
    }

log("Result is " + res);
log("================================\n");
log("\n End of Program !!\n\t");