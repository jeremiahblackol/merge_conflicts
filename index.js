var names = ['Chase', 'Cap', 'Luna', 'Toph', 'Leo', 'Uno']

var cat1 = {
  name: 'Pep',
  color: 'black',
  age: 4,
  traits: ['shy', 'nice']
}

var cat2 = {
  name: 'Baby',
  color: 'black',
  age: 2,
  traits: ['shy', 'cuddly']
}

var cat3 = {
  name: 'Chula',
  color: 'multi',
  age: 6,
  traits: ['confident', 'jungle cat', 'patient']
}

function getSum(num1, num2) {
  var sum = num1 + num2
  return sum
}

getSum(10, 2)
  // should give me back 12

getSum(100, 1)
  // should give me back 101

function printDogGreeting(dogNames) {
  for (var i = 0; i < dogNames.length; i++) {
    var greeting = `Hi ${dogNames[i]}!  Who is a good pup?!`
    console.log(greeting)
  }
}

printDogGreeting(names)
  //will console log once for each name in the names array found on line 1

function getCatAge(catInfo) {
  var catAge = catInfo.age
  return catAge
}

getCatAge(cat2)
  // should give me back 2 because the object called cat2 has an age of 2

getCatAge(cat1)
  // should give me back 4 because the object called cat1 has an age of 4
