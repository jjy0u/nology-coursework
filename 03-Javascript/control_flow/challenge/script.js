function NegativeOrPositive(event) {
    const number = event.target.value;

    if (number >= 0) {
        alert("The number is positive");
    }
    else if (number < 0) {
        alert("the number is negative");
    }
    else {
        alert("write a number.");
    }
}

function Number1(event) {
    const num1 = event.target.value;
function Number2(event) {
        const num2 = event.target.value;
function Number3(event) {
        const num3 = event.target.value;

    const largest = Math.max(num1, num2, num3)

    alert(largest + " is the largest number.");
}
}
}

function calculateDaysTillWeekend(event) {
    let weekday = event.target.value;
    let day;

    switch (weekday) {
        case "Monday":
            day = 1;
            alert ((6-day) + " days until the weekend.");
            break;
        case "Tuesday":
            day = 2;
            alert ((6-day) + " days until the weekend.");
            break;
        case "Wednesday":
            day = 3;
            alert ((6-day) + " days until the weekend.");
            break;
        case "Thursday":
            day = 4;
            alert ((6-day) + " days until the weekend.");
            break;
        case "Friday":
            day = 5;
            alert ((6-day) + " days until the weekend.");
            break;
        case "Saturday":
            alert ("It's the weekend!");
            break;
        case "Sunday":
            alert ("It's the weekend!");
            break;
        default:
            alert("Sorry, we didn't recognise that day.")
    }

}


function vegetablePrices(event) {
    let vegetables = event.target.value;
    vegetables = vegetables.toLowerCase();

    switch (vegetables) {
        case "potatoes":
            alert ("The price is £0.99 per kg");
            break;        
        case "carrots":
        alert ("The price is £0.99 per kg");
        break;
        case "brocolli":
            alert ("The price is £0.70 per kg");
            break;
        case "cabbage":
            alert ("The price is £0.80 per kg");
            break;
        case "asparagus":
            alert ("The price is £1.10 per kg");
            break;

}
}