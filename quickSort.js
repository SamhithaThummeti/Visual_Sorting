async function partition(element, l, r) {
  let i = l - 1;

  element[r].style.background = "red";

  for (let j = l; j <= r - 1; j++) {
    element[j].style.background = "yellow";

    await waitingTime(delay);

    if (parseInt(element[j].style.height) < parseInt(element[r].style.height)) {
      i++;
      swap(element[i], element[j]);

      element[i].style.background = "orange";
      if (i !== j) element[j].style.background = "orange";

      await waitingTime(delay);
    } else {
      element[j].style.background = "pink";
    }
  }

  i++;
  await waitingTime(delay);
  swap(element[i], element[r]);

  element[r].style.background = "pink";
  element[i].style.background = "green";

  await waitingTime(delay);

  for (let k = 0; k < element.length; k++) {
    if (element[k].style.background !== "green") {
      element[k].style.background = "cyan";
    }
  }

  return i;
}

async function quickSort(element, l, r) {
  if (l < r) {
    let pivot_index = await partition(element, l, r);

    await quickSort(element, l, pivot_index - 1);
    await quickSort(element, pivot_index + 1, r);
  } else {
    if (l >= 0 && r >= 0 && l < element.length && r < element.length) {
      element[l].style.background = "green";
      element[r].style.background = "green";
    }
  }
}
