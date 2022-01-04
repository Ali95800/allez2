// alert("coucou");

$(function () {
  //ici mon code

  // ------------------ EVENEMENT MOUSEOVER----------------------

  $(".zone1").on("mouseover", function () {
    $(this).css("background", "red");
    $("#info").text("je suis dans la zone 1");
  });

  // ------------------ EVENEMENT MOUSEMOVE----------------------

  $(".zone2").on("mousemove", function (event) {
    $(this).text("pageX: " + event.pageX + ", pageY: " + event.pageY);
    $("#info").text("je suis dans la zone 2");
  });

  // ------------------ EVENEMENT MOUSEOUT----------------------
  $(".zone3").on("mouseout", function () {
    $(this).css("background", "red");
    $("#info").text("je suis dans la zone 3");
  });

  // ------------------ EVENEMENT MOUSEENTER----------------------
  $(".zone4").on("mouseenter", function () {
    $(this).css("background", "red");
    $("#info").text("je suis dans la zone 4");
  });

  // ------------------ EVENEMENT MOUSELEAVE----------------------
  $(".zone4").on("mouseleave", function () {
    $(this).css("background", "green");
    $("#info").text("je suis sorti de la zone 4");
  });
  // ------------------ EVENEMENT MOUSEUP----------------------
  $(".zone5").on("mouseup", function () {
    $(this).css("background", "red");
    $("#info").text("je suis dans la zone 5");
  });

  // ------------------ EVENEMENT MOUSEDOWN----------------------
  $(".zone6").on("mousedown", function () {
    $(this).css("background", "green");
    $("#info").text("je suis sorti de la zone 6");
  });

  $(".zone7").on("click", function () {
    $(this).css("background", "red");
    $("#info").text("je suis sorti de la zone 7");
  });

  $(".zone8").on("dblclick", function () {
    $(this).css("background", "red");
    $("#info").text("je suis sorti de la zone 8");
  });

  $(".zone9").contextmenu(function () {
    //click droit
    $(this).css("background", "red");
    $("#info").text("je suis sorti de la zone 9");
  });

  $(".zone10").on("blur", function () {
    //click int / relache ext
    $(this).css("background", "red");
    $("#info").text("je suis sorti de la zone 10");
  });

  $(".zone11").on("change", function () {
    //lorsque nous allons changer l'option d'un élément select
    $(this).css("background", "red");
    $("#info").text("je suis sorti de la zone 11");
  });

  $(".zone12").on("keydown", function () {
    //lorsque nous allons presser une touche
    $(this).css("background", "red");
    $("#info").text("je suis sorti de la zone 11");
  });

  $(".zone12").on("keyup", function () {
    //lorsque nous allons relacher une touche
    $(this).css("background", "HotPink");
    $("#info").text("je suis sorti de la zone 11");
  });

  $(window).on("scroll", function () {
    $("#info").css("background", "LightGreen");
    $("#info").text("Je scroll");
  });
});
