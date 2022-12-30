let mergeSort = (l, r, arr) => {
  if (l < r) {
    let mid = ~~((l + r) / 2);
    mergeSort(l, mid, arr);
    mergeSort(mid + 1, r, arr);
    let left = [];
    let right = [];
    for (let i = 0; i <= mid; i++) {
      left.push(arr[i]);
    }
    for (let i = mid + 1; i < r; i++) {
      right.push(arr[i]);
    }
    let i = 0;
    let j = 0;
    let k = 0;
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        arr[k] = left[i];
        i++;
      } else {
        arr[k] = right[j];
        j++;
      }
      k++;
    }
    while (i < left.length) {
      arr[k] = left[i];
      i++;
      k++;
    }
    while (j < right.length) {
      arr[k] = right[j];
      j++;
      k++;
    }
  }
};

let mergeArrays = (myArray, alicesArray) => {
  // Combine the sorted arrays into one large sorted array
  let combined = myArray.concat(alicesArray);
  if (combined.length < 1) {
    return combined;
  }
  mergeSort(0, combined.length, combined);
  return combined;
};

// Tests

let desc = "both arrays are empty";
let actual = mergeArrays([], []);
let expected = [];
assertDeepEqual(actual, expected, desc);

desc = "first array is empty";
actual = mergeArrays([], [1, 2, 3]);
expected = [1, 2, 3];
assertDeepEqual(actual, expected, desc);

desc = "second array is empty";
actual = mergeArrays([5, 6, 7], []);
expected = [5, 6, 7];
assertDeepEqual(actual, expected, desc);

desc = "both arrays have some numbers";
actual = mergeArrays([2, 4, 6], [1, 3, 7]);
expected = [1, 2, 3, 4, 6, 7];
assertDeepEqual(actual, expected, desc);

desc = "arrays are different lengths";
actual = mergeArrays([2, 4, 6, 8], [1, 7]);
expected = [1, 2, 4, 6, 7, 8];
assertDeepEqual(actual, expected, desc);

function assertDeepEqual(a, b, desc) {
  const aStr = JSON.stringify(a);
  const bStr = JSON.stringify(b);
  if (aStr !== bStr) {
    console.log(`${desc} ... FAIL: ${aStr} != ${bStr}`);
  } else {
    console.log(`${desc} ... PASS`);
  }
}
