arr = [1, 3, 14, 21, 42, 66, 85]

const lienarSearh = (arr, num) => {

    let printOut = "";

    arr.forEach(number => {
        if(number == num) {
            printOut=`Number: ${number} was found. `
        } 
    });
    if(printOut == "") {
        printOut = "Number not found"
    }

    return printOut

}

console.log(lienarSearh(arr, 14))
console.log(lienarSearh(arr, 7))




const binarySearch = (arr, num) => {
    let printOut = "";

    let half = Math.ceil(arr.length / 2)
    arr1 = arr.slice(0, half);
    arr2 = arr.slice(-half)

    for(i = 0; i < arr1.length; i++) {
      if(arr1[i] == num)  {
          return `Number: ${num} was found.`
      }
    }
    for(j = 0; j < arr2.length; j++) {
        if(arr2[j] == num)  {
            return `Number: ${num} was found.`
        }
    }
    
   


    return "Number not found in Binary Search"
}


console.log(binarySearch(arr, 7))
console.log(binarySearch(arr, 14))
console.log(binarySearch(arr, 66))