function isPalindrome(str) {
  str = str.toLowerCase();
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (str[start] !== str[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}

function checkPalindrome() {
  const inputString = document.getElementById("inputString").value;
  const resultElement = document.getElementById("result");

  if (isPalindrome(inputString)) {
    resultElement.textContent = `"${inputString}" is a palindrome.`;
  } else {
    resultElement.textContent = `"${inputString}" is not a palindrome.`;
  }
}
// 2nd
function findMinMax() {
  const input = document.getElementById("numberSeries").value;
  const numbers = input.split(",").map((num) => parseFloat(num.trim()));

  if (numbers.some(isNaN)) {
    document.getElementById("result").textContent =
      "Please enter valid numbers separated by commas.";
    return;
  }

  const min = Math.min(...numbers);
  const max = Math.max(...numbers);

  document.getElementById(
    "result"
  ).textContent = `Minimum: ${min}, Maximum: ${max}`;
}
// 3rd
function findMissingNumber() {
  const series = [11, 12, 14, 15, 16, 18, 19, 20];
  let expected = series[0];
  let missingNumber = null;

  for (let num of series) {
    if (num !== expected) {
      missingNumber = expected;
      break;
    }
    expected++;
  }

  if (missingNumber === null) {
    missingNumber = series[series.length - 1] + 1;
  }

  document.getElementById(
    "result"
  ).textContent = `Missing number: ${missingNumber}`;
}
