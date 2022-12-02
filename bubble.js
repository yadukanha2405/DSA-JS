console.log("Bubble Sort")
function bubbleSort(arr){
   
 for(let i=0; i<arr.length; i++){
    let swap = true;
    for(let j=0;j<(arr.length-i);j++){
      
        if(arr[j]>arr[j+1]){
            let temp = arr[j];
            arr[j]= arr[j+1];
            arr[j+1]= temp;
            swap =false;
        }
    }
   
    if (swap) break;  //avoid already sorted Iteration 
    
 }
 return arr;
}

let result = bubbleSort([5,4,6,43,2,7,9,3]);
console.log(result)