// Use nested conditional statements
let coinFLip = 50
let randomNum = Math.round(Math.random() * 100)
let choice = prompt('Heads or Tails?')
if (randomNum > 50 && choice == 'Heads') {
    result = 'The flip was heads and you chose heads...you win!'
} else if (randomNum < 50 && choice == 'Tails') {
    result = 'The flip was heads but you chose tails...you lose!'
} else if (randomNum < 50 && chioce == 'Heads') {
    result  = 'The flip was tails but you chose heads...you lose'
} else {
    result = 'The flip was tails and you chose tails...you win'
} alert(result) 