arr = [1, 3, 14, 21, 42, 66, 85]

const lienarSearh = (arr, num) => {

    let printOut = "";

    arr.forEach(number => {
        if(number == num) {
            reutrn `Number: ${number} was found. `
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

    let middle = Math.abs(arr.length / 2)
    let firstHalf = arr.slice(0, middle);
    let secoundHalf = arr.slice(-middle)

    for(i = 0; i < firstHalf.length; i++) {
      if(firstHalf[i] == num)  {
          return `Number: ${num} was found.`
      }
    }
    for(j = 0; j < secoundHalf.length; j++) {
        if(secoundHalf[j] == num)  {
            return `Number: ${num} was found.`
        }
    }

    return "Number not found in Binary Search"
}


console.log(binarySearch(arr, 7))
console.log(binarySearch(arr, 14))
console.log(binarySearch(arr, 66))

