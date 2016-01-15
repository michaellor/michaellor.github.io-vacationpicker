$(document).ready(function() {
  // -- Function to have single checkbox click only.
  var checkID;

  function toggle(checkbox) {
    if (checkbox.checked) {
      if (checkID) {
        document.getElementById(checkID).checked = false;
      }
      checkID = checkbox.getAttribute('id');
    }
  }



  // $("input:checkbox").click(function() {
  //     if ($(this).is(":checked")) {
  //         var group = "input:checkbox[name='" + $(this).attr("name") + "']";
  //         $(group).prop("checked", false);
  //         $(this).prop("checked", true);
  //     } else {
  //         $(this).prop("checked", false);
  //     }

    event.preventDefault();
  });


});
