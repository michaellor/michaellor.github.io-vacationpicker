$(document).ready(function() {

  var total = 0;
  var dataInput;


  $('form').submit(function(event) {



    for(var x = 0; x < 5; x += 1) {
      var dataInput = $(dataInput[type="radio" + x + ]:checked).val();
      dataInput = parseInt(dataInput);
      total += dataInput;
    }
    console.log(total);

  if (total < 5 ) {
    alert("total is zero");
  }

  else {
    alert("not working!");
  }

  event.preventDefault();

    });

  });
