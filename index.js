var names = ['Chase', 'Cap', 'Luna', 'Toph']

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

function getSum(num1, num2) {
  var sum = num1 + num2
  return sum
}

function printDogGreeting(dogNames) {
  for (var i = 0; i < dogNames.length; i++) {
    var greeting = `Hi ${dogNames[i]}!  Who is a good pup?!`
    console.log(greeting)
  }
}

function getCatAge(catInfo) {
  var catAge = catInfo.age
  return catAge
}
