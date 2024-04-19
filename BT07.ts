function sum<T extends number,U extends number>(num1: T, num2: U) {
    let num3;
    console.log(num3 = num1 + num2);
    console.log(num3 = num1 * num2);
    console.log(num3 = num1 - num2);
    console.log(num3 = num1 / num2); 
}
sum(1, 2);
// khi thay đổi kiểu dữ liệu truyền vào thì sẽ báo lỗi ngay

