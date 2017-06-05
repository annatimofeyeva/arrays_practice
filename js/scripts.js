
$(document).ready(function() {
 $("#submit_button").click(function(event) {
  event.preventDefault();
  var male1 = $("input#actor1").val();
  var male2 = $("input#actor2").val();
  var male3 = $("input#actor3").val();
  var male4 = $("input#actor4").val();
  var male5 = $("input#actor4").val();
/*$("div#output").text(male1 + ", " + male2 + ", " + male3 + ", " + male4 + ", " + male5);*/

var maleInput = [male1, male2, male3, male4, male5];
var maleNew = [];
maleNew.push(maleInput[1]);
maleNew.push(maleInput[0]);
maleNew.push(maleInput[2]);


/*$("div#output").text(maleInput);
  /*var female1 = $("input#actor1").val();
  $("div#output").text(female1);
  var female2 = $("input#actor1").val();
  $("div#output").text(female2);
  var female3 = $("input#actor1").val();
  $("div#output").text(female3);
  var female4 = $("input#actor1").val();
  $("div#output").text(female4);
  var female5 = $("input#actor1").val();
  $("div#output").text(female5);
  */

//alert(maleNew);
$("ul").append("<li>"+ maleNew[0] + "</li>");
$("ul").append("<li>"+ maleNew[1] + "</li>");
$("ul").append("<li>"+ maleNew[2] + "</li>");

  });
});
