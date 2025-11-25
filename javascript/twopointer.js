//Two pointer one input, opposite ends
let fun = arr => {
    let left = 0;
    let right = arr.length - 1;
    let ans = [];
    while (left < right) {
       //do some logic with  with arr[left] and arr[right]
       if(condition){
        left++;
       }else {
        right--;
       }
        
    }
    return ans;
}