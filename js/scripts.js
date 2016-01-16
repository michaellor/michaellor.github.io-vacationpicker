$(document).ready(function() {

  $("form#survey").submit(function(event) {

    var sum1 = Number($("select#q1").val());
    var sum2 = Number($("select#q2").val());
    var sum3 = Number($("select#q3").val());
    var sum4 = Number($("select#q4").val());
    var sum5 = Number($("select#q5").val());

    var total = (sum1 + sum2 + sum3 + sum4 + sum5);

    if (total <= 3) {
        $("#result").append("<br><img class=results src=img/img00.jpg><h5>Isla Sorna</h5><p>Congratulations, your anti social demeanor and desire to stick yourself has landed you on the remote island of Isla Sorna. You might recall this lush green island from the Jurassic Park films. Don't worry, we're sure you'll make it!</p><p>Not Satisfied?</p><input type='button' value='Try Again!' onClick='window.location.reload()'>");

      }
        else if (total <= 8) {
        $("#result").append("<br><img class=results src=img/img01.jpg><h5>The Shire</h5><p>Okay, you're not completely anti-social. The shire is a quiet little Hobbit town where you can enjoy peace and quiet, but also mingle with the friendly townsfolk. Don't forget to try the local wines!</p><p>Not Satisfied?</p><input type='button' value='Try Again!' onClick='window.location.reload()'>");
      }

        else if (total <= 12) {
        $("#result").append("<br><img class=results src=img/img02.jpg><h5>Masdar City, UAE</h5><p>Masdar City is a city of the future. Located in the United Arab Emirates, it's a new city built with a sustainable design vision. There are no personal cars in the city as all vehicular traffic is limited to automated self-driving passenger cars that transport people around the city. This is definitely a vacation getaway.</p><p>Not Satisfied?</p><input type='button' value='Try Again!' onClick='window.location.reload()'>");
      }

        else if (total <= 30) {
        $("#result").append("<br><img class=results src=img/img03.jpg><h5>Long Island. 1922.</h5><p>You're outgoing, and love being in the midst of everything. Our patented time travel technology can bring you back to New York in 1922, just so <em>you</em> can be Great as well. Like Gatsby.</p><p>Not Satisfied?</p><input type='button' value='Try Again!' onClick='window.location.reload()'>");
      }

  event.preventDefault();
  });
});
