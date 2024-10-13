let shoppingList = [
  "Milk",
  "Eggs",
  "Bread",
  ["Apples", "Bananas", "Oranges"],
  ["Potatoes", "Tomatoes", "Onions"]
];
let shoppingListB = JSON.parse(JSON.stringify(shoppingList));
//fetching first item in shoppinglist
console.log(shoppingList[0]);
//pushing elements 
shoppingList.push('carrots');
 console.log('before',shoppingListB);
//implementing pop item
console.log(shoppingList);
shoppingList.pop();
 console.log('after',shoppingList);
//splice

console.log('before' ,shoppingListB);
shoppingList[4].splice(1, 2, "Cucumbers", "Bell Peppers");
console.log('after',shoppingList);

let student = {
  name: "Amit",
  age: 20,
  grade: "A",
  address: {
      street: "123 Main St",
      city: "Anytown",
      country: "India"
  }
};
//Fetching Specific Value:
console.log(student.name);
//Adding Value:
student.phone="123-456-7890";
console.log(student);
//deleting
delete student.grade;
console.log(student);
//modify
student.age=21;
console.log(student.age);


//Conditionals assignment

//Task 1: Understanding if Statements:
function positive(n){
  if(n>0){
    return "positive";
  }
  else{
    return 'negative';
  }
}
console.log(positive(2));
console.log(positive(-1));

//Task 2: Implementing else if Statements:
function studentscore(marks){
  if(marks>=90 && marks<=100){
    return 'A';
  }
  else if(marks>=80  && marks<=89){
    return 'B';
  }
else if(marks>= 70&& marks<=79){
  return 'D';

}
else{
  return 'F'
}
}

console.log(studentscore(81));

//Task 3: Exploring Truthy/Falsy Concepts:
function truthyfalsy(string){
  if(string){
    return 'Truthy';
  }
  else{
    return 'Falsy';
  }
}
console.log(truthyfalsy(""));
console.log(truthyfalsy("hello "));



