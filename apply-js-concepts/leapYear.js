function isLeapYear(year) {
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        return 'True, The year is leap year!';
    }
    else {
        return 'False, The year is not leap year!';
;
    }
}
const myYear = 1904;
const isMyYearLeapYear = isLeapYear(myYear);
console.log(isMyYearLeapYear);