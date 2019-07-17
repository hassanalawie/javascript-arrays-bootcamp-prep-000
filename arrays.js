var chocolateBars=
[
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'  
];
element='foo';
function addElementToBeginningOfArray(array,element)
{
  var c=[element,...array];
  return c;
}

function destructivelyAddElementToBeginningOfArray(array,element)
{
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element){
  var c=[...array, element];
  return c;
}
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function accessElementInArray(array, n)
{
  return array[n];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  
  return array.shift();
}