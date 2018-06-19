// Code your solution in this file
function findMatching(arr, name){
  return arr.filter(function (dname) {
    return name.toUpperCase() === dname.toUpperCase()
  });
}

function fuzzyMatch(arr, letters){
  return arr.filter(function (fletters) {
    console.log(fletters.slice(0, letters.length).toUpperCase === letters.toUpperCase())
    return fletters.slice(0, letters.length).toUpperCase === letters.toUpperCase()
  });
}


function matchName() {

}
