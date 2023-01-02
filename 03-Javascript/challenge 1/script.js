function calculateYearsUntilRetirement(event) {
    const currentAge = event.target.value;

    const yearsLeft = 65 - currentAge;
    alert("You have " + yearsLeft +" years left until you retire.")
}

function getGreetingInFrench(event) {
    const greeting = event.target.value

    if (greeting == "Hello")
        alert("Bonjour");
    else
        alert("Words not recognised.");

        if (greeting == "Goodbye")
        alert("Au revoir");
    else
        alert("Words not recognised.");

}