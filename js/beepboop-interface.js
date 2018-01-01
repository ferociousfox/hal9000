//front end
var Calculator = require('./../js/beepboop.js').calculatorModule;

$(document).ready(function() {
  $('#hal9000').submit(function(event) {
    event.preventDefault();
    $('#output').empty();
    var userNumber = parseInt($('#user-number').val());
    var simpleCalculator = new Calculator('hot pink');
    var userArray = simpleCalculator.beepBoop(userNumber);
    userArray.forEach(function(element) {
      $('#output').append("<li>" + element + "</li>");
    });
  });
});
