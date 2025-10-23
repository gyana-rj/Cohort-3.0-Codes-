// With this setting enabled, TypeScript assumes that any array access could be undefined.
// Even though your for loop logic (i < nums.length) looks safe, 
// TypeScript still treats nums[i] as having the type number | undefined just in case.


function getMax(nums: number[]) {
  if (nums.length === 0) return undefined;

  let maxValue = nums[0] ?? -Infinity;

  for (let i = 1; i < nums.length; i++) {
    const currentNum = nums[i];

    if (currentNum !== undefined && currentNum > maxValue) {
      maxValue = currentNum;
    }
  }
  return maxValue;
}

interface User {
    firstName : string;
    lastName : string;
    age : number;
}

function filterUsers(users : User[]){
    return users.filter((user) => user.age > 18)
}

const filteredUsers  = filterUsers([{
    firstName : "tee",
    lastName : "sharnma",
    age : 20
},{
    firstName : "yunika",
    lastName : "Thakur",
    age : 29
}

])

console.log(filteredUsers);