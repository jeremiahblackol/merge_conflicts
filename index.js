var array = ['Chase', 'Cap', 'Luna', 'Toph']

var catInfo = {
  name: 'Pep',
  color: 'black',
  age: 4,
  traits: ['shy', 'nice']
}

function numbers(num1, num2) {
var sum = num1 + num2
return sum
}

function dogGreeting(array) {
for (var i = 0; i < array.length; i++) {
var greeting = `Hi ${array[i]}!  Who is a good pup?!`
console.log(greeting)
}
}

function getCatAge(catInfo) {
  var catAge = catInfo.age
  return catAge
}
