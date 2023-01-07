// function that returns true if number is positive and negative if number is negative
const isNumberPositive = (number) => {
    console.log(Boolean(number>0));
}

isNumberPositive(-1)
isNumberPositive(10)


//function that takes the number of days and converts it to age
const convertDaysToAge = (numberOfDays) => {
    const calculateAge = numberOfDays / 365;
    console.log(calculateAge);
}

convertDaysToAge(3650);
convertDaysToAge(6570);


//function that when given three numbers, returns the largest number
const getLargestNumber = (number1,number2,number3) => {
    if (number3 > number1 && number2) {
        console.log(number3);
    }
    else if (number2 > number1 && number3) {
        console.log(number2);
    }
    else{
        console.log(number1);
    }
}


getLargestNumber(2 ,1, 4); 
getLargestNumber(6,2,3);


//function that returns last name from an array of names
const getLastName = (names = []) => {
    let lastName = names.pop();
    console.log(lastName);
}

getLastName(["Charlie", "Rob", "Andy"]);
getLastName(["Ash","Stu"]);

//