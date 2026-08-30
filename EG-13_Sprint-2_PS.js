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
//6. Two Sum
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    const mp = new Map();
    for (let i = 0; i < nums.length; i++) {
        const cmp = target - nums[i];
        if (mp.has(cmp)) {
            return [mp.get(cmp), i];
        }
        mp.set(nums[i], i);
    }
    return [];
}
//7. Flatten a Nested Array
/**
 * @param {Array} arr
 * @return {Array}
 */
function flattenArray(arr) {
    return arr.flat(Infinity);
}
//8. Group Anagrams
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
    const mp = {};
    for (const val of strs) {
        const key = val.split('').sort().join('');
        if (!mp[key]) {
            mp[key] = [];
        }
        mp[key].push(val);
    }
    return Object.values(mp);
}
//9. Longest Substring Without Repeating Characters
/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
    let subset = new Set();
    let l = 0,
        r = 0;
    let mxlen = 0;
    while (r < s.length) {
        while (subset.has(s[r])) {
            subset.delete(s[l]);
            l++;
        }
        subset.add(s[r]);
        mxlen = Math.max(mxlen, r - l + 1);
        r++;
    }
    return mxlen;
}
//10. Deep Clone an Object
/**
 * @param {Object} obj
 * @return {Object}
 */
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    const copy = Array.isArray(obj) ? [] : {};
    for (const val in obj) {
        if (obj.hasOwnProperty(val)) {
            copy[val] = deepClone(obj[val]);
        }
    }
    return copy;
}