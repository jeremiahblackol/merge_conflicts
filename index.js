var dogNames = ['Chase', 'Cap', 'Luna', 'Toph', 'Leo', 'Uno']

var catInfo = {
  name: 'Pep',
  color: 'black',
  age: 4,
  traits: ['shy', 'nice']
}

function addTwoNumbers(num1, num2) {
  var sum = num1 + num2
  return sum
}

function dogGreeting(dogNames) {
  for (var i = 0; i < dogNames.length; i++) {
    var greeting = `Hi ${dogNames[i]}!  Who is a good pup?!`
    console.log(greeting)
  }
}

function getCatAge() {
  var catAge = catInfo.age
  return catAge
}
