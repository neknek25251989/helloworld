var height = 1.8;
var weight = 90;
var bmi = calculateBmi(height, weight);

document.writeln('Hi');
document.write(bmi);
healthText(bmi);
healthText(bmi, 100);

function calculateBmi (height, weight) {
  var bmi; 
  bmi = weight / (height * height) ;
  return bmi;
}

function healthText(bmi, inch=0) {
  if(inch>=80) {
    document.write('太肥<br>');
    return;
  }  
  
  if(bmi < 18) {
    document.write('過瘦<br>');
  } else if(bmi>=18 && bmi<=22) {
    document.write('適中<br>');
  } else {
    document.write('過胖<br>');
  } 
}
