var chocolateBars=
[
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'  
]

function addElementToBeginningOfArray(a[],b)
{
  c=[b,...a];
  return c
}

function destructivelyAddElementToBeginningOfArray(a[],b)
{
  a.unshift(b);
  return a
}
