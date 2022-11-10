// დავალება N1  დადებითი რიცხვების ჯამის ამოღება
let sum = [2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8]
function dadebiti() {
    let x = 0;
    for(let item of sum){
        if(item > 0){
            x += item;
        }
    }
    return x;
}
console.log(dadebiti());


// დავალება N2 გამოიტანეთ ყველა რიცხვის ჯამი
let numbers =[10, 50, 6, 7, 8, 11, 6, 3, 9];
function jami(){
    let x = 0;
     for(let item of numbers){
         x = x + item;
     }
     return x;
 };
 console.log(jami());

 // დავალება N3 სახელი და გვარი ადგილის გამოტოვებით 	
let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
  }
 
  function printName(obj) {
    if (obj.isloggedin) {
      return `${obj.firstname} ${obj.lastname}`;
    }
    return false;
  }
 
  let printResult = printName(user);
  console.log(printResult);

   //დავალება N4 ფუნქციამ უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური:	
 function max(...numbers) {
    console.log(Math.max(...numbers));
  }
 
  max(12, 25, 20, 14, 200, 250, 4);

   //დავალება N5 გამოიტანეთ ყველა ის რიცხვი რომელიც მეტია 0 ზე და ნაკლებია 10ზე
 
 let array = [1,2,4,10,34,5,7,87]
 for (let g = 0; g < array.length; g++) {
     if (array[g]>0 && array[g]<10) {
         console.log(array[g]);
     }
 }

 //დავალება N6 ციკლის საშუალებით შეამოწმეთ, თუ მასივში არის რიცხვი 5 - გააჩერეთ მასივი
 
 let numbers =[1,2,3,4,5,6,7,8,9,10]
  for (items of numbers) {
   if (items == 5) break;
   console.log(items);
 }
 // დავალება N7.ა სიტყვები რონლის სიმბოლოების რაოდენობდა მეტია 4 და მოიცავს ‘av’ სიმბოელობის თანმიმდევრობას
let array = ['html', 'css', 'python', 'javascript', 'bootstrap'];
for (let item of array) {
  if (item.length > 4 && item.includes('av') ) {
    console.log(item);
  }
}

 // დავალება N7.ა სიტყვები რონლის სიმბოლოების რაოდენობდა მეტია 4 და მოიცავს ‘av’ სიმბოელობის თანმიმდევრობას for met
 let array = ['html', 'css', 'python', 'javascript', 'bootstrap'];
 for (let item of array) {
   if (item.length > 4 && item.includes('av') ) {
     console.log(item);
   }
 }

  //დავალება n7.b სიტყვები რონლის სიმბოლოების რაოდენობდა მეტია 4 და მოიცავს ‘av’ სიმბოელობის თანმიმდევრობას forEach met
let array = ['html', 'css', 'python', 'javascript', 'bootstrap'];
array.forEach((y) => {
     if (y.length > 4 && y.includes("av")) {
       console.log(y);
     }
   });