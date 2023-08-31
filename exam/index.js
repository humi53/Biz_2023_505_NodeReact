function multi(num) {
  if (num % 3 === 0) {
    return true;
  } else {
    return false;
  }
}

function prime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) return false;
  }
  return true;
}

function primeSum(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (prime(nums[i]) === true) {
      sum += nums[i];
    }
  }
  return sum;
}

// let data = [72, 12, 81, 39, 54, 16, 12, 40, 23, 13];
// if (primeSum(data) === 36) console.log("Test 성공");
// else console.log("Test 실패");

function evenSum(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) sum += nums[i];
  }
  return sum;
}

function countSum(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) count++;
  }
  return count;
}

const nums = [72, 12, 81, 39, 54, 16, 12, 40, 23, 13];
console.log(evenSum(nums));
console.log(countSum(nums));
