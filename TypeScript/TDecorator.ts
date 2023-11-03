function first() {
    console.log("first(): factory evaluated");
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("first(): called");
    };
}

function second() {
    console.log("second(): factory evaluated");
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("second(): called");
    };
}
function logClass(){
    console.log("Class(): factory evaluated");
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
        console.log("logClass() constructor called");
    };
}
@logClass
class Class {
    constructor(){}

    @first()
    @second()
    method() {}
}

let C = new Class();
C.method();