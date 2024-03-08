/// <reference path="myModule.ts" />

import { MyClass } from "./myModule";

// Using MyClass from myModule
const instance = new MyClass();
instance.sayHello();

// Another use case: referencing external libraries
/// <reference path="lodash.d.ts" />
import _ from "lodash";

const numbers = [1, 2, 3, 4, 5];
const sum = _.sum(numbers);
console.log("Sum:", sum);

// Triple-slash directive to include type definitions for jQuery
/// <reference types="jquery" />
import $ from "jquery";

$(document).ready(function() {
    console.log("jQuery is ready!");
});

// Triple-slash directive to include type definitions for React
/// <reference types="react" />
import React from "react";
import ReactDOM from "react-dom";

const element = <h1>Hello, React!</h1>;
ReactDOM.render(element, document.getElementById("root"));