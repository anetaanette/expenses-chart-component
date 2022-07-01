console.log("hfygf");
// GETTING JSON DATA 
async function loadNumbers() {
    const response = await fetch('./data.json');
    const numbers = await response.json();
    console.log(numbers); 
  }

  console.log(loadNumbers());

  