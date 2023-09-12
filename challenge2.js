/**
 * greet(name):
 * - receives a name
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Hamza") logs "Hello Hamza"
 */
function greet(name) 
{
  // Your code here
  console.log(`Hello ${name}`)
}


/***********************************************
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */

function isOdd(n) {
  // Your code here
  if (n%2 == 0)
  {
    return false;
  } 
  else return true;
}


/***********************************************
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */


// using loop
function oddsSmallerThan(n) 
{
  // Your code here
  let c = 0;

  for(i = 0; i < n; i++)
  {
    if (i%2 == 0);
    else c++;
  }

  return c;
} 

// Another way (using equations)
/*
function oddsSmallerThan(n) 
{
  // Your code here
  if (n%2 ==0)
  {
    return n/2;

  } else 
  {
    return ((n-1)/2);
  }
}
*/

// Another way (using equations & call function isOdd(n) )
/*
function oddsSmallerThan(n) 
{
  // Your code here
  if (isOdd(n))
  {
    return ((n-1)/2);

  } else 
  {
    return n/2;
  }
}
*/



/***********************************************
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */


function squareOrDouble(n)
 {
  // Your code here
  if (n%2 == 0)
  {
    return n*2;
  } 
  else return n*n;
}

// Another way (call funtion inside another one) 
/*
function squareOrDouble(n)
 {
  // Your code here
  if (isOdd(n))
  {
    return n*n;
  } 
  else return n*2;
}
*/


greet("Ghaalia");
console.log(isOdd(24));
console.log(oddsSmallerThan(15));
console.log(squareOrDouble(3));
console.log(squareOrDouble(5));