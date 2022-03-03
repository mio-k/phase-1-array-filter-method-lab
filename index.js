// Code your solution here
// function findMatching(drivers, str){
//     let item = item.toUpperCase;
//     for (item of drivers){
//       if(item === str){

//       }
//     }
// }
// function findMatching(drivers, str){
//     const upperCased = [];
//     for (let driver of drivers){
//         upperCased.push(driver.toUpperCase());
//     }
//     str = str.toUpperCase();
//     const result = drivers.filter(driver => driver === str);
//     return result;
// }
function findMatching(drivers, str){
    const upperCased = [];
    for (let driver of drivers){
        upperCased.push(driver.toUpperCase());
    }
    str = str.toUpperCase();
    const result = upperCased.filter(driver => driver === str);
    return result;
}