// alert("coucou");
// $(document).ready(function () {}
//une autre facon d'écrire function

$(function () {
  //---------------------------SELECTION BALISE---------------------------

  //ici mon code jQuery
  // $ Permet d'attraper un élément
  let maBaliseSpan = $("span"); //sélectiionne toute les balises span dans html
  console.log(maBaliseSpan);
  $(maBaliseSpan).css("color", "purple"); // changement de propriété css
  maBaliseSpan.css("background", "pink"); // changement de propriété css

  //---------------------------SELECTION ID---------------------------
  let monID = $("#masection"); // Seléctionne l'iD
  console.log("monID");
  $(monID).css("color", "red"); // changement de propriété css

  //---------------------------SELECTION CLASSE---------------------------
  let maClasse = $(".voiture"); // Seléctionne les éléments de la classe .voiture
  console.log(maClasse);
  $(maClasse).css("color", "blue"); // changement de propriété css
  $(maClasse).first().css("color", "green");
  $(maClasse).last().css("color", "yellow");
  $(maClasse).eq(1).css("color", "grey");

  //---------------------------SELECTION MULTIPLE---------------------------

  let mesElements = $("h1, article, aside"); //je sélectionne plusieur balise html
  console.log(mesElements);
  $(mesElements).css("color", "orange");

  //---------SELECTION DES PARENTS OU DES ANCETRE--------------------
  $("li").parent().css("border", "2px solid red");
  $("li").parents("div").css("border", "2px dashed red"); //On sélectionne les ancetres div des li

  //---------SELECTION DES ENFANTS--------------------

  $(".conteneur").children().css("font-weight", "700"); //on selectionne les enfants de la class conteneur
  $(".conteneur").children("#enfants").css("color", "red");
  $(".conteneur").find(".find").css("border", "blue 2px dashed");

  //---------SELECTION DES FRERES--------------------
  $("li:first-child").siblings().css("text-align", "right");
});
// -------- RESUME DES PRINCIPAUX SELECTEURS
/*
      	selection de balise : $('span')
      	selection d'un #id : $('#id')
      	selection d'une classe .class : $('.classe')
      	selection d'un élément par lui-même : $(this)
      	selection d'un élément par sa balise et son type : $('input:text')
      	selection d'un élément par son type (tous les types radio) : $(':radio')
      	selection d'un élément par son attribut : $('img[alt]')
      	selection d'un élément par son attribut (tous les attributs) : $('[alt]')
      	selection d'un élément par le nom de l’attribut ET sa valeur : $("img[title='paris']")
      	sélectionner plusieurs sélecteurs en même temps : $("h1, p, #id")
      
*/
