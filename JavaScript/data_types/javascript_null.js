var person = {
  firstName:'John', lastName:'Doe', age:50, eyeColor:'blue'
}
person = null;
document.getElementById('demo').innerHTML = typeof person;
var person1 = {
  firstName:'John', lastName:'Doe', age:50, eyeColor:'blue'
}
person1 = undefined;
document.getElementById('demo1').innerHTML = person1;
document.getElementById('demo2').innerHTML = 
typeof undefined + '<br>' +
typeof null + '<br><br>' + 
typeof [1,2,3,4] + '<br>' + 
typeof function myFunc(){} + 
(null === undefined) + '<br>' +
(null == undefined);