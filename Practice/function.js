const add = (...nums) => {
    var sum = 0;
    for (i = 0; i < nums.length; i++) {
      sum += nums[i];
    }
    return sum;
  };
  
const multiply = (...nums) => {
    var sum = 1;
    for (i = 0; i < nums.length; i++) {
      sum *= nums[i];
    }
    return sum;
  };
const minus = (...nums) => {
    var sum = nums[0];
    for (i = 1; i < nums.length; i++) {
      sum -= nums[i]; // sum = sum - nums[i];
    } 
    return sum;
  };
  
  const divide = (...nums) => {
      var sum = nums[0];
    for (i = 0; i < nums.length; i++) {
      sum /= nums[i];
    }
    return sum;
  };
  
function main(...nums) {
    //higher order function
    let data = [];
    let ans = 0;
    //inner is a closure function

    function calculate(operation) {
      ans = operation(...nums);
      data.push("Ans of " + operation.name + " function :" + ans);
      return data;
    }
    return calculate; //return inner function
  
  }
  
  const test1 = main(1, 2, 3);
  console.log(test1(divide));