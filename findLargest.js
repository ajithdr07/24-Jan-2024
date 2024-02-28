const x = [1, 3454, 655, 24, 7, 8];

let largest = x[0];
for (let i = 1; i < x.length; i++) {
  if (x[i] > largest) {
    largest = x[i];
  }
}

if (largest == undefined) {
  console.log("Array is empty");
} else {
  console.log(`Largest element is ${largest}`);
}
