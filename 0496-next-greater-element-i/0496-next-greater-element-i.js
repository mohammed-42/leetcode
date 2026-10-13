/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let stack = [];
    let map = new Map();

    for (let i = 0; i < nums2.length; i++) {
        while (stack.length > 0 && stack[stack.length - 1] < nums2[i]) {
            const popped = stack.pop();
            map.set(popped, nums2[i]);
        }
        stack.push(nums2[i]);
    }

    return nums1.map(num => map.get(num) ?? -1);
};