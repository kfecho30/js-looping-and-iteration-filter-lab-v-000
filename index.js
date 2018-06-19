// Code your solution in this file
function findMatching(arr, name){
  return arr.filter(function (dname) {
    return name.toUpperCase() === dname.toUpperCase()
  });
}

function fuzzyMatch(){
  
}