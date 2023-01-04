$(document).ready(function () {
  $("#left").on("click", function () {
    let number = parseInt($("#baseNumber").val());
    let headingNumber = parseInt($("#headingNumber")[0].innerHTML);
    $("#headingNumber")[0].innerHTML = headingNumber + number;

    if (parseInt($("#headingNumber")[0].innerHTML) < 0) {
      $("#headingNumber").css("color", "red");
    } else {
      $("#headingNumber").css("color", "black");
    }
  });

  $("#right").on("click", function () {
    let number = parseInt($("#baseNumber").val());
    let headingNumber = parseInt($("#headingNumber")[0].innerHTML);
    $("#headingNumber")[0].innerHTML = headingNumber - number;

    if (parseInt($("#headingNumber")[0].innerHTML) < 0) {
      $("#headingNumber").css("color", "red");
    } else {
      $("#headingNumber").css("color", "black");
    }
  });
});
