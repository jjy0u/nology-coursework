//write function named get description that:
// takes four arguments: no. children, partners name, geo location, job title
//outputs your statement to console like so: "I am currently a X, living in Y, married to Z with N kids"
//Call the function 3 times with 3 different value for the arguments.

const getDescription = (noChildren, parterName, geoLocation, job) => {
console.log("I am currently an " + job + ", living in " + geoLocation + ", married to " + parterName + " with " + noChildren + " kids.")
}

getDescription("3", "Hannah", "London", "Engineer")
getDescription("5", "Eric", "Paris", "Artist")
getDescription("2", "Callum", "Bath", "Accountant")

//calculateSupply function that: takes arguments: age and amount per day.
//calculates ammount consumed for the rest of your life based on a constant max age
//outputs to the console like so: "You will need X to last you until the ripe old age of Y"
// call on the function 3 times, with a different values.
// bonus, run through a floating number that is rounded.

const calculateSupply = (age, amountPerDay) => {
    const maxAge = 90; 
    const lifetimeSupply = amountPerDay * 365* (maxAge - age);
    const roundedSupply = Math.round(lifetimeSupply);
    const message = "You will need " + roundedSupply + " snickers bars to last you until the ripe old age of " + maxAge + ".";
    console.log(message);
}

calculateSupply(23, 2)
calculateSupply(70, 5)
calculateSupply(55, 3.5)

//celsius to farenheit converter
const convertTemperature = (celsius) => {
    const calculateFarenheit = (celsius * 9/5) + 32;
    const message = "That is " + calculateFarenheit + " degrees in Farenheit.";
    console.log(message);
}

convertTemperature(20)


//dog years calculator

const calculateDogYears = (humanYears) => {

    if (humanYears == 1) {
        dogYears = 15
    } 
    else if (humanYears == 2) {
        dogYears = 24;
    } 
    else {
        dogYears = 24 + 4.5*(humanYears - 2);
    }

    const message = "That is " + dogYears + " dog years.";
    console.log(message);
}

calculateDogYears(3)