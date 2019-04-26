var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, ele){
  arr.unshift(ele)
  return arr 
}

function destructivelyAddElementToBeginningOfArray(arr, ele){
  return [...arr, ele]  
}