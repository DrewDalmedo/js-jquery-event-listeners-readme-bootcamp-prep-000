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
  $('#typing').on('keydown', (key) => {
    if(key.which == 71) {
      alert("the letter g has been pressed, commence nuclear meltdown");
    }
  });
}

function submitIt() {
  $('form').on('submit', () => {
    alert("Your form is going to be submitted now.");
  });
}

$(document).ready(function(){

// call functions here

});
