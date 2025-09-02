async function merge(element, low, mid, high) {
  const n1 = mid - low + 1;
  const n2 = high - mid;

  let left = new Array(n1);
  let right = new Array(n2);

  // ADD: Arrays to store innerHTML values
  let leftHTML = new Array(n1);
  let rightHTML = new Array(n2);

  for (let i = 0; i < n1; i++) {
    await waitingTime(delay);
    element[low + i].style.background = "orange";
    left[i] = element[low + i].style.height;
    leftHTML[i] = element[low + i].innerHTML; // ADD
  }

  for (let j = 0; j < n2; j++) {
    await waitingTime(delay);
    element[mid + 1 + j].style.background = "yellow";
    right[j] = element[mid + 1 + j].style.height;
    rightHTML[j] = element[mid + 1 + j].innerHTML; // ADD
  }

  await waitingTime(delay);
  let i = 0,
    j = 0,
    k = low;

  while (i < n1 && j < n2) {
    await waitingTime(delay);
    if (parseInt(left[i]) <= parseInt(right[j])) {
      element[k].style.height = left[i];
      element[k].innerHTML = leftHTML[i]; // ADD
      element[k].style.background =
        n1 + n2 === element.length ? "green" : "lightgreen";
      i++;
    } else {
      element[k].style.height = right[j];
      element[k].innerHTML = rightHTML[j]; // ADD
      element[k].style.background =
        n1 + n2 === element.length ? "green" : "lightgreen";
      j++;
    }
    k++;
  }

  while (i < n1) {
    await waitingTime(delay);
    element[k].style.height = left[i];
    element[k].innerHTML = leftHTML[i]; // ADD
    element[k].style.background =
      n1 + n2 === element.length ? "green" : "lightgreen";
    i++;
    k++;
  }

  while (j < n2) {
    await waitingTime(delay);
    element[k].style.height = right[j];
    element[k].innerHTML = rightHTML[j]; // ADD
    element[k].style.background =
      n1 + n2 === element.length ? "green" : "lightgreen";
    j++;
    k++;
  }
}

async function mergeSort(element, l, r) {
  if (l >= r) {
    return;
  }
  const m = l + Math.floor((r - l) / 2);
  await mergeSort(element, l, m);
  await mergeSort(element, m + 1, r);
  await merge(element, l, m, r);
}
