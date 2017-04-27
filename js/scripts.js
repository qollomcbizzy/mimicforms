
$(document).ready(function(){
$("#blanks form").submit(function(event){
  /*assign values to the input*/
  var person1input = $("input#person1").val();
  var person2input = $("input#person2").val();
  var animalinput = $("input#animal").val();
  var exclamationinput = $("input#exclamation").val();
  var verbinput = $("input#verb").val();
  var nouninput = $("input#noun").val();
  $(".person1").append(person1input);
  $(".person2").append(person2input);
  $(".animal").append(animalinput);
  $(".exclamation").append(exclamationinput);
  $(".verb").append(verbinput);
  $(".noun").append(nouninput);
  $("#story").show();
  /*prevents the default form event when submitting,we pass the function below
  to call back what we submitted */
   event.preventDefault();/*preventDefault() function prevents the form from submitting*/
});
});
