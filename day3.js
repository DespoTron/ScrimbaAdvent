// Project Name: Chunky Monkey

// Write a functino that splits an array (first argument) into groups the length of size
// (second argument) and returns them as a two-dimensional array.

// Example
  // chunkyMonkey(["a", "b", "c", "d"], 2) should return [["a","b"],["c","d"]]
  // chunkyMonkey([0, 1, 2, 3, 4, 5], 4) should return [[0,1,2,3],[4,5]].

// Hints
// slice()

function chunkyMonkey(values, size) {
  let results = [];

  for(let i = 0, d = 0, s = 0; i < values.length; i++, s++) {
    if (i > 0 && i % size === 0) {
      d++;
      s = 0;
    }

    if (results[d] === undefined) results[d] = []; 

    results[d][s] = values[i];
  }
  return results;
}


console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));
