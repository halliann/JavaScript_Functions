console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
    for(let i = 1; i <= count; i++) {
        if(i % 2 !== 0) {
            console.log(i);
        }
    }

    for(let j = 1; j >= count; j--) {
        if(j % 2 == -1) {
            console.log(j);
        }
    }
}

// printOdds(-10)
// printOdds(10)


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age) {
    let ofDrivingAge = (`Congrats ${userName}, you can drive!`);
    let notOfDrivingAge = (`Sorry ${userName}, but you need to wait until you're 16.`);
    let noAgeOrName = ("I'm sorry. We haven't been introduced, and I'm not sure if you can drive or not. Please go back and enter your info.");

    if(age >= 16) {
        console.log(ofDrivingAge);
    }

    else if(age < 16) {
        console.log(notOfDrivingAge);
    }

    else {
        console.log(noAgeOrName);
    }
};

// checkAge("Halli", 29);
// checkAge();


// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function quadrant(x, y) {
    if(x > 0 && y > 0) {
        return 'I';
    }
    else if(x < 0 && y > 0) {
        return 'II';
    }
    else if(x < 0 && y < 0) {
        return 'III';
    }
    else if(x > 0 && y < 0) {
        return 'IV';
    }
};

// console.log(quadrant(2,-2));


// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function triangleType(x, y, z) {
    if(x >= y + z || y >= x + z || z >= x + y ) {
        return 'Invalid Triangle';
    }
    else if(x == y &&  y == z) {
        return 'Equilateral';
    }
    else if(x === y || x === z || y === z) {
        return 'Isosceles';
    }
    else if(x !== y &&  y !== z) {
        return 'Scalene';
    }
};

// console.log(triangleType(7, 3, 3));
// console.log(triangleType(2, 2, 2));
// console.log(triangleType(8, 10, 10));
// console.log(triangleType(10, 7, 4));


// Exercise 5 BONUS Section
console.log("EXERCISE 5:\n==========\n");

function dailyTracking(planLimit, day, usage) {
    let planPeriod = 30;
    let avgDailyUse = usage / day;
    let daysRemaining = planPeriod - day;
    let remainingData = planLimit - usage;
    let projectedUsage = planPeriod * avgDailyUse;
    let maxDailyUse = remainingData / daysRemaining;

    console.log(`${day} days used, ` + (daysRemaining) + ` days remaining.`);
    console.log(`Average daily use: ` + (planLimit / planPeriod));

    if(planPeriod * avgDailyUse > 30) {
        console.log(`You are EXCEEDING your average daily use (` + (avgDailyUse) + ` GB/day).`);
        console.log(`Continuing this high usage, you'll exceed your data plan by ` + (projectedUsage - planLimit) + ` GB.`);
        console.log(`To stay below your data plan, use no more than (` + (maxDailyUse)  + ` GB/day.)`);
    }
    else if (planPeriod * avgDailyUse <= 30) {
        console.log(`Continuing this usage, you'll use ` + (projectedUsage) + ` GB of your data plan.`);
        console.log(`To stay below your data plan, use no more than (` + (maxDailyUse)  + ` GB/day.)`);
    }
};

dailyTracking(100, 15, 56);