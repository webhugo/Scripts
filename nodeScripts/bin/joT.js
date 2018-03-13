// 最大连续和问题
// let arr = [1, 2, 3, -3, 5, -5, 1, 4];
// let dp = [];
// let l = arr.length;
// dp[0] = arr[0];
// let max = dp[0];
// for (let i = 1; i < l; i++) {
//     dp[i] = Math.max(dp[i - 1] + arr[i], arr[i]);
//     if (dp[i] > max)
//         max = dp[i];
// }
//
// console.log(max);

// 快排
// function quickSort(array) {
//     function sort(prev, numsize) {
//         let first = prev;
//         let last = numsize - 1;
//         let flag = array[prev];
//         if ((numsize - prev) > 1) {
//             while (first < last) {
//                 for (; first < last; last--) {
//                     if (array[last] < flag) {
//                         array[first++] = array[last];　//a[i] = a[last]; i += 1;
//                         break;
//                     }
//                 }
//                 for (; first < last; first++) {
//                     if (array[first] > flag) {
//                         array[last--] = array[first];
//                         break;
//                     }
//                 }
//             }
//             array[first] = flag;
//             sort(0, first);
//             sort(first + 1, numsize);
//         }
//     }
//
//     sort(0, array.length);
//     return array;
// }
//
// console.log(quickSort([34, 54, 4, 3, 23, 5, 4]));

var findMedianSortedArrays = function(nums1, nums2) {
    var i = 0, j = 0;
    var length = nums1.length + nums2.length;
    while(i+j + 1 < length/2){
        if(nums1[i]  < nums2[j]){
            i++;
        }else{
            j++;
        }
    }
    if(length % 2 == 1){
        return Math.min(nums1[i],nums2[j]);
    }else{
        var a = Math.min(nums1[i],nums2[j]);
        if(nums1[i]  < nums2[j]){
            i++;
            if(i == nums1.length){
                return (a+nums2[j])/2;
            }
        }else{
            j++;
            if(j == nums2.length){
                return (a+nums1[i])/2;
            }
        }
        var b = Math.min(nums1[i],nums2[j]);
        return (a+b)/2;
    }
};
console.log(findMedianSortedArrays([], [1]));