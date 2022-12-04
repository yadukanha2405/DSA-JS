function insertionSort(arr) {

    //1st way:-
    for (var i = 1; i < arr.length; i++) {
      var currentVal = arr[i];
      for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
        arr[j + 1] = arr[j];
      }
  
      arr[j + 1] = currentVal;
    }
  
    //2nd way:-
    // for(let i = 1;i<arr.length;i++){
    //   for(let j = i;j>0;j--){
    //       if(arr[j-1] > arr[j]){
    //           //swap
    //           let temp = arr[j];
    //           arr[j] = arr[j-1];
    //           arr[j-1] = temp;
    //       }
    //       else{
    //           break;
    //       }
    //   }
    // }
    return arr;
  }
  let result = insertionSort([6, 7, 1, 9, 4, 2]);
  console.log(result);