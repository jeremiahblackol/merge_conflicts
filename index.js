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

function getSum(num1, num2) {
  var sum = num1 + num2
  return sum
}

//getSum(2, 5)
  //should give me back 7

  //getSum(200, 3)
    //should give me back 203

function printDogGreeting(dogNames) {
  for (var i = 0; i < dogNames.length; i++) {
    var greeting = `Hi ${dogNames[i]}!  Who is a good pup?!`
    console.log(greeting)
  }
}

// printDogGreeting(names)
  // should console log for each of the dogs in the names array on line 1

function getCatAge(catInfo) {
  var catAge = catInfo.age
  return catAge
}

//getCatAge(cat1)
  //should give me back 4 because the age property of the cat1 object holds the value of 4

  //getCatAge(cat2)
    //should give me back 2 because the age property of the cat2 object holds the value of 2
