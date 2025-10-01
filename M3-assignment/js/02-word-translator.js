// prompt for language code ("es", "de", "en", and "fr"). If enter one of four codes, display translated version of "Hello World" in given language in console. If enters else, default English.
let welcomeLanguage = prompt('Enter one of the following codes: es / de / en / fr')
if (welcomeLanguage === 'es') {
    console.log('Hola Mundo')
}  else if (welcomeLanguage === 'de') {
    console.log('Hallo Welt')
} else if (welcomeLanguage === 'en') {
    console.log('Hello World')
} else if(welcomeLanguage === 'fr') {
    console.log('Bonjour le monde')
} else {
    console.log('Hello World')
}