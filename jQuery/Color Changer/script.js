/*!
    jQuery is a JavaScript library that provides a simple interface to easily create and manipulate jQuery objects and functions that can be used to manipulate jQuery objects and functions.
    Basic approach is as follows:
*/

$(document).ready(function() {
    $("#btn").click(function() {
            var color = ["white", "red", "green", "yellow", "blue", "magenta", "cyan", "black", "orange"];
            var i = Math.floor(Math.random() * 10);

            $("#root").css("backgroundColor",color[i]);
            $("title").text("Color is "+color[i]);
    });
  });
  