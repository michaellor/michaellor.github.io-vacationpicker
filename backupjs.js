$(document).ready(function() {

  $("form#survey").submit(function(event) {

    var sum1 = $("select#q1").val();
    var sum2 = $("select#q2").val();
    var sum3 = $("select#q3").val();
    var sum4 = $("select#q4").val();
    var sum5 = $("select#q5").val();

    console.log(sum1);

  // if (total <= 0 && total >=3); {
  //   $("place1").show()}
  // }
  // if (total <= 4 && total >=7) {
  //   $("place1").show()}
  // }
  // if (total <= 0 && total >=3) {
  //   $("place1").show()}
  // }

  event.preventDefault();
  });
});
