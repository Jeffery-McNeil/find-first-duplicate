function findFirstDuplicate(arr) {
  let newArray = []
  let exception = null
  for (let i = 0; i <= arr.length; i++) {
    newArray.push(arr[i])
    if ((newArray.filter(element => element === arr[i])).length >= 2) {
      return arr[i]
    } else {
      exception = -1
    }
  }
  if (exception !== null) {
    return -1
  }  
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
