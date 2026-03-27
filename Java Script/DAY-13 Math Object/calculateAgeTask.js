window.onload = function () {
  let todayDate = new Date();

  let formattedDate = todayDate.toISOString().split("T")[0];

  document.getElementById("currentDate").value = formattedDate;
};

//! function to calculate age
function calculateAge() {
  let birthDate = document.getElementById("birthDate").value;

  let today = new Date();

  let birthDateObj = new Date(birthDate);

  if (!birthDate) {
    alert("please provide your birthdate");
    return;
  }

  let yearDiff = today.getFullYear() - birthDateObj.getFullYear();

  let monthDiff = today.getMonth() - birthDateObj.getMonth();

  let daysDiff = today.getDate() - birthDateObj.getDate();

  if (monthDiff < 0) {
    yearDiff--;
    monthDiff += 12;
  }

  if (daysDiff < 0) {
    let previousDate = new Date(today.getFullYear(), today.getMonth(), 0);
    console.log(previousDate.getDate());
    daysDiff += previousDate.getDate();
    console.log(daysDiff);
    monthDiff--;
    console.log(monthDiff);
  }

  document.getElementById("result").textContent =
    `Age: ${yearDiff} years ${monthDiff} months ${daysDiff} days`;
}
