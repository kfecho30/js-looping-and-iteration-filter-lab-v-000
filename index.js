// Code your solution in this file
function findMatching(arr, name){
  return arr.filter(function (dname) {
    return name.toUpperCase() === dname.toUpperCase()
  });
}

function fuzzyMatch(arr, letters){
  return arr.filter(function(fletters){
    let f = fletters.length = letters.length
    return f.toUpperCase = letters.toUpperCase()
  });
}


function matchName() {
  
}
