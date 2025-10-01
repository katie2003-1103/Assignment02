// Use else if or switch statements
let givenNum = parseInt(prompt('Choose a Number between 1 and 100'))
if (givenNum > 100 || givenNum < 1 || Number.isNaN(givenNum)) {
    console.log('Only Numbers between 1 and 100 are accepted')
} else if (givenNum >= 90 && givenNum <= 100) {
    console.log('You recieved an A.')
} else if (givenNum <= 89 && givenNum >= 80) {
    console.log('You recieved a B.')
} else if (givenNum <= 79 && givenNum >= 70) {
    console.log('You recieved a C.')
} else if (givenNum <= 69 && givenNum >= 60) {
    console.log('You recieved a D.')
}   else {
    console.log('You recieved an F.')
}