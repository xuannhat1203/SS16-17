function compare<T extends string | number | boolean, U extends string | number | boolean>(item: T, item2: U) {
    if (item === item2) {
        console.log(1);
    } else {
        console.log(0);
    }
}
compare(2, "2");

