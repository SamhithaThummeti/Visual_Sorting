async function bubbleSort() {
  const Arr = document.querySelectorAll(".bar");
  for (let i = 0; i < Arr.length - 1; i++) {
    for (let j = 0; j < Arr.length - i - 1; j++) {
      await waitingTime(delay);
      Arr[j].style.background = "violet";
      Arr[j + 1].style.background = "violet";
      await waitingTime(delay);
      if (parseInt(Arr[j].style.height) > parseInt(Arr[j + 1].style.height)) {
        await waitingTime(delay);
        swap(Arr[j], Arr[j + 1]);
        await waitingTime(delay);
      }
      Arr[j].style.background = "cyan";
      Arr[j + 1].style.background = "cyan";
    }
    Arr[Arr.length - 1 - i].style.background = "green";
  }
  Arr[0].style.background = "green";
}




