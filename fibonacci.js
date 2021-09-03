/**
 * @param  {number} targetNum
 * @returns {boolean} - whether prune number or not
 */

function isPruneNum(targetNum) {
  // better to cut off odds number from performance viewpoint
  // odds number should not be calculated
  if (targetNum % 2 === 0) return false;

  // better to cut off calculating over Math.sqrt(num) from performance viewpoint
  // ex. in case of 120 (can be divide into 10 * 12 )
  // 12(> Math.sqrt(120)) would be unnecessary to be calculated
  // because already 10 is appeared and suggests its  a element who can divide 120

  for (let i = 2; i < Math.sqrt(targetNum); i++) {
    if (targetNum % i === 0) return false;
  }

  return targetNum > 1;
}

// /**
//  * @param  {number} index
//  * @return {number} - fibonacci number
//  */

// function fibonacci(index) {
//   if (index <= 1) {
//     return 1;
//   }
//   return fibonacci(index - 1) + fibonacci(index - 2);
// }

/**
 * @param  {number}  targetNum
 * @return {number}  the minimum fibonacci & prune number over targetNum
 */

function nxtPrmFib(targetNum) {
  const fibonacciCache = [1, 2];

  if (targetNum <= 2) return 2;

  while (true) {
    //ex.
    //fibonacciCache =>  [1,2] [2,3] [3,5] [5,8] ...[89,144]
    let tmp = fibonacciCache[0];
    fibonacciCache[0] = fibonacciCache[1];
    fibonacciCache[1] = tmp + fibonacciCache[1];

    if (fibonacciCache[1] >= targetNum) {
      if (isPruneNum(fibonacciCache[1])) {
        break;
      }
    }
  }
  return fibonacciCache[1];
}

//console.log(nxtPrmFib(20));
module.exports = nxtPrmFib;
