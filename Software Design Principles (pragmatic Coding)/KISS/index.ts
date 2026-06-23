function checkEven(nums: number[]) {
    const even: number[] = []
    for (let num of nums) {

        if (num % 2 === 0) {
            even.push(num)
        } else {
            console.log(`${num} is odd`);

        }
    }
    return even;
}
// console.log(checkEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// good practise 

function checkEvenGood(nums: number[]) {
    return nums.filter((num) => num % 2 == 0)
}
console.log(checkEvenGood([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); 