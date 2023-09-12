/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */

function printName()
{
    console.log("Ghaalia Alshammari")
}



/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */

function printAge(BirthYear)
{
    console.log(`The age : ${2023-BirthYear}`)
}



/**
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */
function printHello(name, language)
{
    if (language == "En")
    {
        console.log(`Hello ${name}`)
    } else if (language == "Es")
    {
        console.log(`Hola ${name}`)
    } else if (language == "Fr")
    {
        console.log(`Bonjour ${name}`)
    } else if (language == "Tr")
    {
        console.log(`Merhaba ${name}`)
    } else 
    {
        console.log(`Don't know this language`)
    }
}



/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */

function printMax (x ,y)
{
    if ( x > y || x == y)
    {
        console.log(`${x} is bigger number`)
    } else
    {
        console.log(`${y} is bigger number`)   
    }
}


printName();
printAge(1999);
printHello("Ghaalia", "En");
printMax(25 , 20);