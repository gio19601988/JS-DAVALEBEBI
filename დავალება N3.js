// დავალება N1 ორი სტრინგის დამატება ჩანაწერში
let array =  [5, 25, 89, 120, 36]
array.push('javascript ','python');
console.log(array)

// დავალება N1.2 ორი სტრინგის დამატება დასაწყისში
let array =  [5, 25, 89, 120, 36]
array.unshift('html','css');
console.log(array)

//დავალება N1.3 გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში; გამოაქვს მხოლოდ 2 ის რაოდენობა
var arr = [1, 2, 3, 5, 2, 8, 9, 2];

// Count how many 2 there are in arr
var count = arr.filter(x => x === 2).length;

console.log(count);

//დავალება N1.4 წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;