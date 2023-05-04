
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth() + 1; // Add 1 to get the correct month (JavaScript months are zero-indexed)

// Check if the month is a single digit
if (currentMonth < 10) {
  currentMonth = "0" + currentMonth;
}

let currentDay = currentDate.getDate();
if (currentDay < 10) {
  currentDay = "0" + currentDay;
}

// Combine the year, month, and day into a string in the format YYYY-MM-DD
const formattedDate = `${currentDay}-${currentMonth}`;

console.log(formattedDate);
const dateEl = document.querySelector(".date")
console.log(dateEl)
dateEl.innerHTML = formattedDate;