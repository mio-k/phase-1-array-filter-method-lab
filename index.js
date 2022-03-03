
function findMatching(drivers, str){
    const result = drivers.filter(driver => driver.toUpperCase() === str.toUpperCase());
    return result;
}
function fuzzyMatch(drivers, str){
    const result = drivers.filter(driver => driver.charAt(0) === str.charAt(0))
    return result;
}
function matchName(drivers, str) {
const result = drivers.filter(driver => driver.name === str)
return result;
}