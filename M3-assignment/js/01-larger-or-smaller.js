// SIMPLE CONDITIONAL: Accept two integers within two seperate prompts, display the larger of the two within browser window - account for potential equal numbers
let num1 = Number(prompt('What is your age?')) 
let num2 = Number(prompt('What is your best friend\'s age?'))
if (num2 > num1) { 
    document.write(num2)
} else if (num2 < num1) {
    document.write(num1)
} else {
    document.write('Both numbers are equal.')
}