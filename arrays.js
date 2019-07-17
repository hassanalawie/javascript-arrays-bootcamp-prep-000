var chocolateBars=
[
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'  
]
element='foo'
function addElementToBeginningOfArray(array[],element)
{
  c=[element,...array];
  return c
}

function destructivelyAddElementToBeginningOfArray(array[],element)
{
  array.unshift(element);
  return a
}
