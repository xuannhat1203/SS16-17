function swapElements<T>(array: T[], index1: number, index2: number): T[] {
    let result = [...array];
    if (index1 >= 0 && index1 < array.length && index2 >= 0 && index2 < array.length) {
      let temp = result[index1];
      result[index1] = result[index2];
      result[index2] = temp;
    }
    return result;
}
let myArray = [1, 2, 3, 4, 5];
let swappedArray = swapElements(myArray, 1, 3);
console.log(swappedArray); 


