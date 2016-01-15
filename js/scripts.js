$(document).ready(function() {

var sum1;

  $("form").submit(function(event) {
    var sum1 = $('form input[type=radio]:checked').val();
    sum1 = parseInt(input);



  // var total = 0;
  // var input;
  //
  // $("form").submit(function(event) {
  //   for(var index = 1; index < 6; index ++) {
  //     var input = $("input[name=radio" + index + "]:checked").val();
  //     input = parseInt(input);
  //     total += input;
  //
  //   }
  });
 console.log("sum1");

  if (sum1 === 0 ) {
    alert("total is zero");
  }

  else {
    alert("not working!");
  }



  event.preventDefault();
  });
