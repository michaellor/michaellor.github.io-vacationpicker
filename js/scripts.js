$(document).ready(function() {

  $("form#survey").submit(function(event) {
  var sum1 = $("input[name=radio1]:checked").val();
  var sum2 = $("input[name=radio2]:checked").val();
  var sum3 = $("input[name=radio3]:checked").val();
  var sum4 = $("input[name=radio4]:checked").val();
  var sum5 = $("input[name=radio5]:checked").val();

  var total = $(sum1 + sum2 + sum3 + sum4 + sum5).val();


  $("form#survey").submit(function(event) {
    for(var index = 1; index < 5; index += 1) {
      var sum = $("sum[name=radio] + index + "]:checked
    }
  }

  console.log(sum1,sum2,sum3,sum4,sum5, total);

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
