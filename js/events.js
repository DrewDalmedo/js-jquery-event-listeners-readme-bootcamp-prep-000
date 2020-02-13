//define functions here

function getIt() {
  $('p').on('click', () => {
    alert("Hey!");
  });
}

function frameIt() {
  $('img').on('load', () => {
    $('img').addClass("tasty");
  });
}

function pressIt() {
  $('#typing').on('keydown', () => {
    if() {
      alert("secret letter g has been pressed, commence nuclear meltdown");
    }
  });
}

function submitIt() {
  /*
  $().on( , () => {
    
  });
  */
}

$(document).ready(function(){

// call functions here

});
