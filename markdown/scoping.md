# Explain variable scoping with examples

scoping is determine when variable, object and function are accessible in your code during the run time, this mean the score of a variable is control by the location of the variable declared.

there are two type of coping which is the local and global scoping

 local scoping is when you define a variable in a function, that variable is local through that function while  global scoping is when you define a variable outside a function.

 const person = {   
     
    name:"Cephas",
    height:1.5,
    age:15,
    hobbies:["reading","gisting","singing"],
    occupation:"student"
}  

console.log(person.name);

const nameOfPerson = "favour"

const name = () => {
    
  const nameOfPerson = "Dennis"
  console.log(nameOfPerson);
  
}

name(nameOfPerson)