console.log("hfygf");

/* const hiddenAmount = document.getElementsByClassName(".amount");
  const column = document.getElementsByClassName(".column");

  let j = hiddenAmount.length;
  while (j++) {
  let i = column.length;
while (i++) {
  column[i].addEventListener("mouseover", showAmount);
   
  function showAmount() {
      hiddenAmount.style.display = 'block';
  }
  }
  };
  */ 




// GETTING JSON DATA 
async function loadNumbers() {
    const result = await fetch('./data.json');
    const numbers = await result.json();
    console.log(numbers); 
  }

  console.log(loadNumbers());
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

