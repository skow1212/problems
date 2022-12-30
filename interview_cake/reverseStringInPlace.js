let reverse = (arrayOfChars) => {
  // Reverse the input array of characters in place
  if (arrayOfChars.length > 1) {
    let l = 0;
    let r = arrayOfChars.length - 1;
    while (l < r) {
      let temp = arrayOfChars[l];
      arrayOfChars[l] = arrayOfChars[r];
      arrayOfChars[r] = temp;
      l++;
      r--;
    }
  }
};

// Tests

let desc = "empty string";
let input = "".split("");
reverse(input);
let actual = input.join("");
let expected = "";
assertEqual(actual, expected, desc);

desc = "single character string";
input = "A".split("");
reverse(input);
actual = input.join("");
expected = "A";
assertEqual(actual, expected, desc);

desc = "longer string";
input = "ABCDE".split("");
reverse(input);
actual = input.join("");
expected = "EDCBA";
assertEqual(actual, expected, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
