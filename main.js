console.log("hfygf");


// GETTING JSON DATA 
async function loadNumbers() {
  const result = await fetch('./data.json');
  const numbers = await result.json();
  console.log(numbers); 
}

console.log(loadNumbers());



const hiddenAmount = document.querySelector(".amount-mon");
let column = document.querySelector(".column-mon");

column.addEventListener("mouseenter", showAmount);
   
function showAmount() {
  hiddenAmount.style.display = 'block';
  hiddenAmount.innerHTML = [0].amount[0];
};

column.addEventListener("mouseleave", hideAmount);

function hideAmount() {
  hiddenAmount.style.display = 'none';
}; 



/*

const hiddenMon = document.querySelector(".amount-mon");
const hiddenTue = document.querySelector(".amount-tue");
const hiddenWed = document.querySelector(".amount-wed");
const hiddenThu = document.querySelector(".amount-thu");
const hiddenFri = document.querySelector(".amount-fri");
const hiddenSat = document.querySelector(".amount-sat");
const hiddenSun = document.querySelector(".amount-sun");

hiddenMon.addEventListener("mouseover", showNumber);

function showNumber() {
   hiddenMon.innerText = obj.amount[0]
}
*/

//document.querySelector(".amount-mon").innerHTML = obj.amount[0];

