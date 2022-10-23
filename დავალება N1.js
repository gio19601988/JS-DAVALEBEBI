//ცვლადის სტატუსის ამოღება
//ამოიღეთ user ცვლადის სტუდენტის სტატუსი;
let user = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,
    studentstatus: "active"
  }
  console.log(user['studentstatus'])

  //დავალება 2, მასივის შექმნა
  //2. შექმენით მასივი, და დაბეჭდეთ სათითაოდ თითოეული ელემენტი(for da while ციკლით);
  let numbers = [15, 25, 40, 47, 36, 5, 100, 15];

  for (let i = 0; i < numbers.length; i++) {
     console.log(numbers[i]);
  }

  //დავალება 3 მასივიდან 5 მეტის ამოღება
  //3.  შექმენით მასივი, და ამოიღეთ ყველა რიცხვი რომელიც მეტია 5ზე, for ციკლის გამოყენებით.
  let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];
  for (let i = 0; i < numbers.length; i++) {
      if(numbers[i] > 5)
      console.log(numbers[i]);
   }

   //დავალება N4, თუ უსერის ასაკი ნაკლებია 18ზე და სტუდენტის სტატუსი აქტიურია დაიბეჭდოს ტექსტი:  Hello;
   //თუ უსერის სახელი უდრის ლევანს მაშინ დაიბეჭდოს ტექსტი: hello levani;
   //თუ უსერის სტუდენტის სტატუსი აქტიურია ან უსერის ასაკი ნაკლებია 25ზე დაიბეჭდოს ტექსტი: hello world;
   //ყველა დანარჩენ შემთხვევაში დაილოგოს ტექსტი: error;
   
   let userg = {
    name: 'giorgi',
    age:  20,
    studentstatus: 'active'
  }
  
  if(userg.age < 18 && userg.studentstatus==="active"){
    console.log("Hello")
  }else if(userg.name === "levani"){
    console.log("Hello levani")
  }else if(userg.studentstatus === "active" || userg.age < 25){
    console.log("Hello world")
  }
  else{
    console.log("Error")
  }
//დავალება N5 სტრინგების გამოტანა
  let array = [ 'watermelon', 'pear', 10, 45, 50, 'apple', 'ananas' ];
for (let yy of array) {
    if(typeof yy === "string"){
        console.log(yy)
    }
}

//დავალება N6 მოცემული მასივიდან for ციკლი ს საშუალებით კონსოლში გამოიტანეთ მხოლოდ დადებითი რიცხვები:
let array = [ [2, -3, 5, 10], [25, -24, -11, 100] , [-6, -7, 10] ]

 for (let i = 0; i < array.length; i++) {
 console.log(array[i]); 
    let numbers = array[i];
      console.log(numbers);
    for (let x =0; x < numbers.length; x++) {
  console.log(numbers[x]);
         if (numbers[x] > 0) {
             console.log(numbers[x]);
        }
     }
}

//დავალება N7 let array = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]
//ამოიღეთ მარტო ლუწი რიცხვები
//2.ამოიღეთ კენტი რიცხვები 
let array = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]
for(i of array){
    if (i % 2 !=1){
console.log(i)
  }
}
// meore
let array = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]
for(i of array){
    if (i % 2 ==1){
console.log(i)
  }
}

// დავალება 8 
let users = [
  {username: 'giorgi', status: false},
  {username: 'levani', status: false},
  {username: 'anna', status: true}
]

for (let element of users) {
       if (element.status == true) {
          console.log(element);
   }
   }
