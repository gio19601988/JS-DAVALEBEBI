// დავალება N1 ორი სტრინგის დამატება ჩანაწერში
let array =  [5, 25, 89, 120, 36]
array.push('javascript ','python');
console.log(array)

// დავალება N1.2 ორი სტრინგის დამატება დასაწყისში
let array =  [5, 25, 89, 120, 36]
array.unshift('html','css');
console.log(array)

//დავალება N1.3 გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში; 
var arr = [1, 2, 3, 5, 2, 8, 9, 2];

console.log(arr.length);

//დავალება N1.4 წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
var arr = [1, 2, 3, 5, 2, 8, 9, 2];
arr.shift()
arr.pop()
console.log(arr)

//დავალება N1.5   დაბეჭდეთ მასივში ახალი ელემენტები.;
let array =  [5, 25, 89, 120, 36]
array.push('javascript ','python');
array.unshift('html','css');
array.splice(2,5)
console.log(array)

// დავალება N2 შექმენით მასივი, შემდეგი ელემენტებით: ფორთოხალი, ბანანი, მსხალი;
//  გამოიტანეთ ინფორმაცია ეკრანზე თუ რამდენი ელემენტი გაქვთ მასივში;
 //დავალება N2 შექმენით მასივი, შემდეგი ელემენტებით: ფორთოხალი, ბანანი, მსხალი;
 let masivi =  ["ფორთოხალი", "ბანანი", "მსხალი"];

 console.log(masivi.length)
 masivi.push("ვაშლი","ანანასი");
  masivi.unshift("საზამთრო")
  console.log(masivi.length);
  masivi.splice(2,0,"მანგო")
  console.log(masivi);
  masivi.pop();
  masivi.shift();
  console.log(masivi);
  console.log(masivi.length);

  //დავალება N3  map-ის გამოყენებით შექმენით ახალი მასივი, რომელშიც array მასივიდან თითოეული ელემენტი იქნება 3-ზე გაყოფილი;

let array = [12, 25, 3, 6, 8, 14, 7, 23];
let newArray=array.map((item)=>item/3);
console.log(newArray)

 // დავალება N4 filter-ის გამოყენებით გაფილტრეთ და გამოიტანეთ მარტო ციფრები; 
 let array = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];

 let arrayFillter = array.filter(item => typeof item === "number");
 console.log(arrayFillter);

  // დავალება N5 გამოიტანეთ მარტო ის სიტყვები რომლების სიმბოლოების რაოდენობა იქნება 3-ზე მეტი;; 
  let languages = ['html', 'css', 'javascript', 'python', 'php'];
  let newLang = languages.filter(item => item = item.length > 3);
  console.log(newLang);

  // დავალება N6 თუ ელემენტი არის რიცხვი ამ მასივში უნდა იყოს ამ რიცხვის კვადრატი. თუ ელემენტი არის ტექსტი, მაშინ ახალ მასივში უნდა იყოს ეს ტექსტი დიდი ასოებით. სხვა შემთხვევაში ელემენტები უნდა დაემატოს უცვლელად;
  let masive = [12, 'google', 32, null, 'yahoo', 25];
let newmasive = masive.map(function(item){
    if(typeof item === "number"){
        return item * 2;
    }else if(typeof item === "string"){
        return item.toUpperCase();
    }else{
        return item;
    }
})
console.log(newmasive);

// დავალება N7 Filter მეთოდის საშუალებით დააბრუნეთ მასივი, რომელიც შედგება ისეთი სიტყვებისგან რომელიც შეიცავს ასო m-ს ან M-ს;
let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];
let newWords = words.filter(function(item){
    return item = item.includes("m") || item.includes("M");
})
console.log(newWords);


// დავალება N8. Concat მეთოდის საშუალებით გაერთიანეთ ეს სამი მასივი ერთ მასივში
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];
let gaertArr = arr1.concat(arr2,arr3);
console.log(gaertArr);

// დავალება N9. Foreach საშუალებით გამოთვალეთ რიცხვების ჯამი
let arr = [1, 2, 3, 4, 5];
let y = 0;
arr.forEach(function(x){
    y =y + x;
 })
 console.log(y);


// დავალება N10 Filter მეთოდის საშუალებით ამოიღეთ მარტო დადებითი რიცხვები
let numbers = [-2, 5, 10, -5, -1, 1, 3, 4, -15];
let newnumber = numbers.filter(item => item > 0);
console.log(newnumber)


// დავალება N11 არის თუ არა ერთი მაინც დადებითი რიცხვი some მეთიდით
let arr = [-1, -2, -3, 4].some(item => item > 0);
console.log(arr);


// დავალება N12 Sort მეთოდის საშუელებით დაალაგეთ ელემენტები კლებადობის მიხედვით და ამოიღეთ მინიმალური რიცხვი;
let array =[23,45,32,5,87,7,3,98];
array.sort(function(x,y){
    return y - x ;
})
console.log(array);

let newArray=array.sort((x,y)=>y-x)[array.length-1]
console.log(newArray);

// დავალება N13 Splice მეთოდის საშუალებით მიიღეთ: [1, 2, 3, 'a', 'b', 'c', 4, 5].
let array =[1, 2, 3, 4, 5];
array.splice(3,0, "a", "b", "c")
console.log(array);
