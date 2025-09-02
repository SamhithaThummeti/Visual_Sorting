async function selection() {
  const element = document.querySelectorAll(".bar");
  for (let i = 0; i < element.length; i++) {
    let min_index = i;
  
    element[i].style.background = "violet";
      await waitingTime(delay);

    for (let j = i + 1; j < element.length; j++) {
      element[j].style.background = "orange";
      await waitingTime(delay);
      if (
        parseInt(element[j].style.height) <
        parseInt(element[min_index].style.height)
      ) {
        if (min_index !== i) {
          element[min_index].style.background = "cyan";
        }
        min_index = j;
      } else {
        element[j].style.background = "cyan";
      }
    }
    await waitingTime(delay);
    swap(element[min_index], element[i]);
    element[min_index].style.background = "cyan";
    element[i].style.background = "green";
  }
}

