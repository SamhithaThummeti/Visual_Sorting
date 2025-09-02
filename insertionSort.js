async function insertion() {
  const element = document.querySelectorAll(".bar");
  
  element[0].style.background = "green";
      await waitingTime(delay);

  for (let i = 1; i < element.length; i++) {
    let j = i - 1;
        await waitingTime(delay);

    let currentElement = element[i].style.height;
    let currentNum = element[i].innerHTML;
        


    element[i].style.background = "violet";

    await waitingTime(delay);

    while (
      j >= 0 &&
      parseInt(element[j].style.height) > parseInt(currentElement)
    ) {
    

      element[j].style.background = "violet";
          

      element[j + 1].style.height = element[j].style.height;
      element[j + 1].innerHTML = element[j].innerHTML;
      j--;

      await waitingTime(delay);

      for (let k = i; k >= 0; k--) {
        element[k].style.background = "green";
      }
    }
    element[j + 1].style.height = currentElement;
    element[j + 1].innerHTML = currentNum;
    element[i].style.background = "green";
  }
}

