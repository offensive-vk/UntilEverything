$(document).ready(function() {
    $("#btn").click(function() {
            var color = ["white", "red", "green", "yellow", "blue", "magenta", "cyan", "black", "orange"];
            var i = Math.floor(Math.random() * 10);

            $("#root").css("backgroundColor",color[i]);
            $("title").text("Color is "+color[i]);
    });
  });
  