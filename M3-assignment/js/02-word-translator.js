// prompt for language code ("es", "de", "en", and "fr"). If enter one of four codes, display translated version of "Hello World" in given language in console. If enters else, default English.
let welcomeLanguage = prompt('Enter one of the following codes: es / de / en / fr')
if (welcomeLanguage === 'es') {
    console.log('Hello World Translated in Spanish is: Hola Mundo')
}  else if (welcomeLanguage === 'de') {
    console.log('Hello World Translated in Deutsch is: Hallo Welt')
} else if (welcomeLanguage === 'en') {
    console.log('Hello World translated in English is: Hello World')
} else if(welcomeLanguage === 'fr') {
    console.log('Hello World translated in French is: Bonjour le monde')
} else {
    console.log('Hello World translated in English is: Hello World')
}