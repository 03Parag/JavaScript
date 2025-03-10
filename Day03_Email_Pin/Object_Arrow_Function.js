// Constants
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
const WAGE_PER_HOUR = 20;
const FULL_TIME_WAGE = FULL_TIME_HOURS * WAGE_PER_HOUR;

// Function to generate random work hours (0, 4, or 8)
const getWorkHours = () => {
    let workHours = [0, PART_TIME_HOURS, FULL_TIME_HOURS];
    return workHours[Math.floor(Math.random() * workHours.length)];
};

// Function to calculate daily wage
const calculateDailyWage = (hours) => hours * WAGE_PER_HOUR;

// Generate Employee Work Data for 20 Days
let empWageMap = new Map();
let totalWage = 0, totalDaysWorked = 0;

for (let day = 1; day <= 20; day++) {
    let workHours = getWorkHours();
    let dailyWage = calculateDailyWage(workHours);
    empWageMap.set(day, { workHours, dailyWage });

    if (workHours > 0) totalDaysWorked++; // Count days worked
    totalWage += dailyWage; // Accumulate total wage
}

// a. Calculate Total Wage**
console.log("Total Employee Wage:", totalWage);

// b. Show the Day along with Daily Wage using Map Helper Function**
console.log("Day-wise Wage Details:");
empWageMap.forEach((value, key) => console.log(`Day ${key}: Hours = ${value.workHours}, Wage = ${value.dailyWage}`));

// c. Show Days when Full-time Wage of 160 was earned**
let fullTimeDays = [...empWageMap].filter(([_, value]) => value.dailyWage === FULL_TIME_WAGE).map(([day]) => day);
console.log("Days with Full Time Wage (160):", fullTimeDays);

// d. Find the first occurrence when Full Time Wage was earned**
let firstFullTimeDay = fullTimeDays.length > 0 ? fullTimeDays[0] : "Never Earned Full Time Wage";
console.log("First occurrence of Full Time Wage:", firstFullTimeDay);

// e. Check if Every Element of Full Time Wage is truly holding Full Time Wage**
let allFullTime = fullTimeDays.every(day => empWageMap.get(day).dailyWage === FULL_TIME_WAGE);
console.log("Is every full-time wage day holding full-time wage?", allFullTime);

// f. Check if there is any Part Time Wage**
let hasPartTime = [...empWageMap].some(([_, value]) => value.dailyWage === PART_TIME_HOURS * WAGE_PER_HOUR);
console.log("Is there any Part Time Wage?", hasPartTime);

// g. Find the number of days the Employee Worked**
console.log("Total Days Worked:", totalDaysWorked);
