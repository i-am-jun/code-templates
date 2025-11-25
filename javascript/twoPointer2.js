// Two pointers two inputs, exhausting both
let fun = (arr1, arr2) => {
    let i = 0;
    let j = 0;
    let ans = [];
    while (i < arr1.length && j < arr2.length) {
       //do some logic with  arr1[i] and arr2[j]
       if(condition){
        i++;
       }else {
        j++;
       }
        
    }
    while(i < arr1.length){
        //do some logic with arr1[i]
        i++;
    }
    while(j < arr2.length){
        //do some logic with arr2[j]
        j++;
    }
    return ans;
}