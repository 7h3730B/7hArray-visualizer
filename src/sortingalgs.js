import functions from "./functions";

export default {
  algs: [
    {
      name: "Bubble Sort",
      func: bubblesort
    },
    {
      name: "Quick Sort",
      func: quicksort_call
    },
    {
      name: "Selection Sort",
      func: selectionSort
    },
    {
      name: "Iterative Quick Sort",
      func: iterativeqSortCall
    }
  ]
};

async function iterativeqSortCall(array) {
  await iterativeqSort(array, 0, array.length - 1);
}

async function iterativeqSort(array, low, high) {
  if (low < high) {
    let pi = await iterativepartition(array, low, high);

    await Promise.all([
      iterativeqSort(array, low, pi - 1),
      iterativeqSort(array, pi + 1, high)
    ]);
  }
}

async function iterativepartition(array, low, high) {
  let pivot = array[high];
  let i = low - 1;
  for (let j = low; j <= high - 1; j++) {
    if (array[j] <= pivot) {
      i++;
      await swap(array, i, j);
    }
  }
  await swap(array, i + 1, high);

  return i + 1;
}

async function selectionSort(array) {
  let n = array.length;

  for (let i = 0; i < n - 1; i++) {
    let min_index = i;

    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[min_index]) {
        min_index = j;
      }
    }
    await swap(array, min_index, i);
  }
}

async function quicksort(array, left, right) {
  if (left >= right) {
    return;
  }
  let index = await partition(array, left, right);

  await Promise.all([
    quicksort(array, left, index - 1),
    quicksort(array, index + 1, right)
  ]);
}

async function quicksort_call(array) {
  await quicksort(array, 0, array.length - 1);
}

async function partition(array, left, right) {
  let pivotValue = array[right];
  let pivotIndex = left;
  for (let i = left; i < right; i++) {
    if (array[i] < pivotValue) {
      await swap(array, i, pivotIndex);
      pivotIndex++;
    }
  }
  await swap(array, pivotIndex, right);

  return pivotIndex;
}

async function bubblesort(array) {
  let leng = array.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < leng; i++) {
      if (array[i] > array[i + 1]) {
        await swap(array, i, i + 1);
        swapped = true;
      }
    }
  } while (swapped);
}

async function swap(arr, a, b) {
  functions.states[a] = 1;
  functions.states[b] = 1;
  functions.draw();
  await sleep(functions.delay);
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
  functions.draw();
  await sleep(functions.delay);
  functions.states[a] = 0;
  functions.states[b] = 0;
  functions.draw();
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
