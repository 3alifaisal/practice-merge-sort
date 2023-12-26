// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {
  let n = arr.length;
  if(n < 2){
    return arr;
  }
  let mid = Math.floor(n/2);
  let left = arr.slice(0,mid)
  let right = arr.slice(mid);
  return merge(mergeSort(left),mergeSort(right))
}


  

// Example usage:
// const arr = [9, 4, 1, 6, 8, 2, 10, 3, 7, 5];
// const sortedArr = mergeSort(arr);
// console.log(sortedArr);




// Takes in two sorted arrays and returns them merged into one
function merge(left, right) {
  let indexleft = 0;
  let indexright = 0;
  let result = [];
  while (indexleft < left.length && indexright < right.length) {
    if (left[indexleft] < right[indexright]) {
      result.push(left[indexleft]);
      indexleft++;
    } else {
      result.push(right[indexright])
      indexright++
    }
  }

  return result.concat(left.slice(indexleft), right.slice(indexright))
}



module.exports = [merge, mergeSort];

