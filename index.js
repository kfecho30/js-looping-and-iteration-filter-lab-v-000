// Code your solution in this file
function findMatching(arr, name){
  return arr.filter(function (dname) {
    return name.toUpperCase() === dname.toUpperCase()
  });
}

function fuzzyMatch(arr, letters){
  return arr.filter(function(fletters){
    fletters.length = letters.length
    return fletters.toUpperCase = letters.toUpperCase()
  });
}
