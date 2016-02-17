$(document).ready(function() {

// input validation, add a username and password field. Make sure the user's 
// password is "12345" and the form cannot be submitted with a blank username field.
$('form').submit(function() {
  if ($('#username').val() == "") {
    alert('Username cannot be BLANK');
    return false;
  } else if ($('#password').val() == "") {
    alert('Password cannot be BLANK');
    return false;
  } else if ($('#password').val() !== "12345") {
    alert('Incorect Password');
    return false;
  } else {
    alert('LOGIN OK');
  }
});


// When the user presses a key on your web page, tell them if that key is a letter or a
// number. This result ("letter" or "number") should be displayed in an H1 on the page.
  $('#username').keypress(function(event) {
    //write if for key code  to numbers and letters
    var keyNum = event.keyCode;
    if (keyNum >= 65 && keyNum <= 90) {
      $('#nameKeyPress').append(" " + "uppercase letter"); 
    } else if (keyNum >= 97 && keyNum <= 122) {
        $('#nameKeyPress').append(" " + "lowercase letter");
    } else if ((keyNum >= 48 && keyNum <= 57)){
        $('#nameKeyPress').append(" " + "number");
    }
  });
// When the user presses a key on your web
 // page, tell them if that key is a letter or
 // a number. This result ("letter" or "number") 
 //   should be displayed in an H1 on the page.

  $('#password').keypress(function(event) {
    console.log(event.keyCode);
    //write if for key code values to numbers and letters
    var keyNum = event.keyCode;
    if ((keyNum >= 65 && keyNum <= 90) || (keyNum >= 97 && keyNum <= 122)) {
      $('#passwordKeyPress').append(" " + "letter");  
    } else if ((keyNum >= 48 && keyNum <= 57)){
      $('#passwordKeyPress').append(" " + "number");
    }
  });







});