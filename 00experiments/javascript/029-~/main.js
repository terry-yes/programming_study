let a = "hello";

function stringOccurance1(s) {
  let hash = {}
  for (c in a) {
    hash[c] = -~hash[c]
  }
  console.log('function1', hash);
}
stringOccurance2(a);


function stringOccurance2(s) {
  let hash = {}
  for (c in a) {
    if (hash[c] == undefined) {
      hash[c] = 1
    } else {
      hash[c]++
    }
  }
  console.log('function2',hash);
}
stringOccurance2(a)