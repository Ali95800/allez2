$(".zone1").on("click", function () {
  $("h1").css("background", "green");
  $("h1").css("height", "80px");
  $("h1").css("text-align", "center");
});

$(".zone2").on("click", function () {
  $("body").css("background", "red");
});

$(".zone3").on("click", function (event) {
  $("body").first().css("background", "green");
});
