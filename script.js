

const reset = document.querySelector(".Reset");
const bubbleSortBtn = document.querySelector(".Bubble-Sort");
const insertionSortBtn = document.querySelector(".Insertion-Sort");
const mergeSortBtn = document.querySelector(".Merge-Sort");
const quickSortBtn = document.querySelector(".Quick-Sort");
const selectionSortBtn = document.querySelector(".Selection-Sort");
let arraySize = document.querySelector("#arr_sz");
let delayElement = document.querySelector("#speed_input");
const newArray = document.querySelector(".newArray");
const bars = document.querySelector("#bars");
let delay = 260;


// function for waiting
function waitingTime(milisec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, milisec);
  });
}



// function to disable buttons
function disableSortingBtn() {
  bubbleSortBtn.disabled = true;
insertionSortBtn.disabled = true;
  mergeSortBtn.disabled = true;
  quickSortBtn.disabled = true;
  selectionSortBtn.disabled = true;
}

// Enables sorting buttons 
function enableSortingBtn() {
    bubbleSortBtn.disabled = false;
    insertionSortBtn.disabled = false;
    mergeSortBtn.disabled = false;
    quickSortBtn.disabled = false;
    selectionSortBtn.disabled = false;
}

// Disables size slider
function disableSizeSlider() {
  arraySize.disabled = true;
}

// Enables size slider 
function enableSizeSlider() {
  arraySize.disabled = false;
}

// Disables newArray button
function disableNewArrayBtn() {
  newArray.disabled = true;
}

// Enables newArray button
function enableNewArrayBtn() {
  newArray.disabled = false;
}


//array function
arraySize.addEventListener("input", function () {
  createNewArray(parseInt(arraySize.value));
});


// Event listener to update delay time
delayElement.addEventListener("input", function () {
  delay = 320 - parseInt(delayElement.value);
});

// Creating array to store randomly generated numbers
let array = [];

// Call to display bars 
createNewArray();

//input size of array
function createNewArray(noOfBars = 60) {
  //  helper function to delete old bars 
  deleteChild();

  // creating an array of random numbers
  array = [];
  for (let i = 0; i < noOfBars; i++) {
    array.push(Math.floor(Math.random() * (250 - 25 + 1)) + 25);
  }
  
  

// creating bars to show new array
  for (let i = 0; i < noOfBars; i++) {
    const bar = document.createElement("div");
    bar.style.height = `${array[i]*1.5}px`;
    bar.innerHTML = `${array[i]}`;
    bar.style.color = "black";
    bar.style.fontSize = "13px";
    bar.style.width = '25px';
    bar.classList.add("bar");
    bar.classList.add("flex-item");
    bar.classList.add(`barNo${i}`);
    bars.appendChild(bar);
  }
}

// delete all the previous bars to add new array
function deleteChild() {
  const bar = document.querySelector("#bars");
  bar.innerHTML = "";
}


//creating new array button
newArray.addEventListener("click", function () {
  enableSortingBtn();
  enableSizeSlider();
  createNewArray(arraySize.value);
});


//function to swap 
function swap(element1, element2) {
  let temp1 = element1.style.height;
  element1.style.height = element2.style.height;
  element2.style.height = temp1;
  let temp2 = element1.innerHTML;
  element1.innerHTML = element2.innerHTML;
  element2.innerHTML = temp2;
}


// function for reset button
reset.addEventListener("click", async function () { 
enableSortingBtn();
enableSizeSlider();
enableNewArrayBtn();
newArray.click();
});


bubbleSortBtn.addEventListener("click", async function () {
  disableSortingBtn();
  disableSizeSlider();
  disableNewArrayBtn();
  await bubbleSort();
  enableSortingBtn();
  enableSizeSlider();
  enableNewArrayBtn();
});


insertionSortBtn.addEventListener("click", async function () {
  disableSortingBtn();
  disableSizeSlider();
  disableNewArrayBtn();
  await insertion();
  enableSortingBtn();
  enableSizeSlider();
  enableNewArrayBtn();
});


mergeSortBtn.addEventListener("click", async function () {
  let element = document.querySelectorAll(".bar");
  let l = 0;
  let r = parseInt(element.length) - 1;
  disableSortingBtn();
  disableSizeSlider();
  disableNewArrayBtn();
  await mergeSort(element, l, r);
  enableSortingBtn();
  enableSizeSlider();
  enableNewArrayBtn();
});


selectionSortBtn.addEventListener("click", async function () {
  disableSortingBtn();
  disableSizeSlider();
  disableNewArrayBtn();
  await selection();
  enableSortingBtn();
  enableSizeSlider();
  enableNewArrayBtn();
});


quickSortBtn.addEventListener("click", async function () {
  let element = document.querySelectorAll(".bar");
  let l = 0;
  let r = element.length - 1;
  disableSortingBtn();
  disableSizeSlider();
  disableNewArrayBtn();
  await quickSort(element, l, r);
  enableSortingBtn();
  enableSizeSlider();
  enableNewArrayBtn();
});
