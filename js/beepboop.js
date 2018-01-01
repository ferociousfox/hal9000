//back end
function Calculator(skinName) {
  this.skin = skinName;
}

Calculator.prototype.beepBoop = function(userNumber){
  var userArray = [];
  for (var i = 0; i <= userNumber; i++) {
   if (i === 0) {
     userArray.push(" beep! ")
   } else if (i === 1){
    userArray.push(" boop! ")
   } else if (i % 3 === 0){
    userArray.push(" I'm sorry dave, I can't do that. ")
   } else {
    userArray.push(i);
    }
  };
return userArray;
};


exports.calculatorModule = Calculator;
