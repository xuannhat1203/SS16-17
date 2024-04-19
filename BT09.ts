function flatten<T>(arr: (T | T[])[]): T[] {
    let arr3: T[] = [];
    for (const item of arr) {
        if (Array.isArray(item)) {
            arr3.push(...flatten(item));
        } else {
            arr3.push(item);
        }
    }
    return arr3;
}
let arr: (number | number[])[] = [1, [2, [3, 4], 5], 6];
let arr2: number[] = flatten(arr);
console.log(arr2);
