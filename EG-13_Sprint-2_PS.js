//1. Reverse a String
/**
 * @param {string} str
 * @return {string}
 */
function reverseString(str) {
    return str.split('').reverse().join('');
}
//2. Find Maximum
/**
 * @param {number[]} nums
 * @return {number}
 */
function findMax(nums) {
    if (nums.length === 0) {
        return undefined;
    }
    let mx = nums[0];
    for (const val of nums) {
        if (val > mx) {
            mx = val;
        }
    }
    return mx;
}

//3. Check for Palindrome
/**
 * @param {string} str
 * @return {boolean}
 */
function isPalindrome(str) {
    const str2 = str.split('').reverse().join('');
    return str === str2

}
//4. Sum Array Elements
/**
 * @param {number[]} nums
 * @return {number}
 */
function sumArray(nums) {
    let sum = 0;
    for (const val of nums) {
        sum += val;
    }

    return sum;
}

//5. Count Vowels
/**
 * @param {string} str
 * @return {number}
 */
function countVowels(str) {
    let cnt = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' ||
            str[i] === 'o' || str[i] === 'u' || str[i] === 'A' || str[i] === 'E' || str[i] === 'I' ||
            str[i] === 'O' || str[i] === 'U') {
            cnt++;
        }
    }
    return cnt;
}