var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, ele){
  return [ele, ...arr]   
}

function destructivelyAddElementToBeginningOfArray(arr, ele){
  arr.unshift(ele)
  return arr 
}

function addElementToEndOfArray(arr, ele){
  return [...arr, ele]  
}

function destructivelyAddElementToEndOfArray(arr, ele){
  arr.push(ele)
  return arr
}

function accessElementInArray(arr, index){
  return arr[index]
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
  arr.shift()
  return arr
}