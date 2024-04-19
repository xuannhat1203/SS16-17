enum WeekDays {
    MONDAY = "Monday",
    TUESDAY = "Tuesday",
    WEDNESDAY = "Wednesday",
    THURSDAY = "Thursday",
    FRIDAY = "Friday",
    SATURDAY = "Saturday",
    SUNDAY = "Sunday"
}
function printEnum<T>(item: T) {
    for (let key in item) {
        console.log(item[key]);
    }
}
printEnum(WeekDays);






