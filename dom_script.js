$(document).ready(function() {

// form can not pass with blankfield

$('form').submit(function() {
  if ($('#username').val() == "") {
    alert('Username cannot be blank');
    return false;

  } else if ($('#password').val() == "") {
    alert('Password cannot be blank');
    return false;

   // password must be "12345" 

  } else if ($('#password').val() !== "12345") {
    alert('Wrong password');
    return false;

  } else {
    alert('Log In Ok');
  }
});

// anything in body is typed--keypress

$("body").on("keypress", function(e){
      if(Number(e.keyCode) <= 57){
        $("#change").html("number");
      }
      else {
        $("#change").html("letter");
      }
      console.log(e)
    });

  });
