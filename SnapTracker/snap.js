"use strict";
(function(){
  function $(id) {
    return document.getElementById(id);
  }

  let snapOnly = false;
  window.onload = function() {
    let checkbox = $('customCheck1')

    checkbox.addEventListener('change', (event) => {
      if (event.target.checked) {
        console.log('checked')
      } else {
        console.log('not checked')
      }
    })
  }
});
