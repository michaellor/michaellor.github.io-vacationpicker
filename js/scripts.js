$(document).ready(function() {

  $(':checkbox').bind('change', function() {
          var thisClass = $(this).attr('class');
          if ($(this).attr('checked')) {
              $(':checkbox.' + thisClass + ":not(#" + this.id + ")").removeAttr('checked');
          }
          else {
              $(this).attr('checked', 'checked');
          }
      });

// function addClassCheck(el) {
//
//
//   if(el.checked) {
//     el.classList.add("checked");}
//   else {
//     el.classList.remove("checked");
//     }
//   }
//
//   if(document.getElementsByClassName("checked".length>1) {
//     el.checked = false
//     el.classList.remove("checked");
//   }

});
