let arr = [1,40,5,10,5,90,9] 
// arr.forEach loop through each array 
//last wala parameter (orgArray) bhot kaam use hota 
// arr.forEach(function(val,index,orgArray){
// console.log(val,index,orgArray)
// })


// arr.filter() // condition mai use hota, true false dekhta, orgarry pa loi farq nahi dalta, naya array deta
// let result = arr.filter(function(val){
//     return  val % 2 === 0
//     //or
// // if (val % 2 === 0){
// // return true 
// // }

// // else{
// //    return false
// // }
// })
// console.log(result)


// //arr.sort() //(gives new arr take 2 params (a,b) )
// let sortedArr =  arr.sort(function(a,b){
// if(a>b){ // a<b for big to small
// return 1
// }
// else{
//     return - 1
// }
// })
// console.log(sortedArr)


//arr.reduce






// //object

// const person = { //person = object
//     name : "haseeb", //name = key
//     age : 19,// 19 = value
//     hobby : "coding",
//     mergeMethod : function(intro){ // mergeMethod  = method . jo obj ka andar func bnaya jaye ussa method kehta 
// console.log(`${intro} My name is ${this.name} , my age is ${this.age} and my hobby is ${this.hobby}`)//this common function mai nahi chalta
//     }

// }
// // console.log(obj.name,obj.age)
// console.log(person.mergeMethod("Introduction :"))


//object complex (array of objects)
// const student1 ={
//     name : "ali",
//     rollnum: "12",
//     teacher : "nadir",
//     className  : "js" //class reserved word
// }
// const student2 ={
//     name : "haider",
//     rollnum: "122",
//     teacher : "nadir",
//     className  : "css" //class reserved word
// }
// const students = [student1,student2]
//esa objsects bnata raha toh timee lagjaye or code bhot karna parega toh issi lya ham dynamic function bnayenga

// function provideStudent(name,rollnum,teacher,className){
//     return {
//     name : name,
//     rollnum: rollnum,
//     teacher : teacher,
//     className  : className }
// } 

// const students = [
//             provideStudent("ali",1,"nadeem","js")
//             ,provideStudent("header",2,"markhor","css")
//                ] //yeh karna sa time bacha or code bhi chota raha
// console.log(students)



//more automatic work (using local storage)

function provideStudent() {
    // Retrieve existing students from localStorage each time
    const studentExist = localStorage.getItem("students");
    const students = studentExist ? JSON.parse(studentExist) : [];
    

    // Prompt for student details
    const str = {
        name: prompt("Enter name"),
        rollnum: +prompt("Enter roll number"),
        teacher: prompt("Enter teacher name"),
        className: prompt("Enter class name")
    };

    // Add the new student to the array
    students.push(str);
    console.log(students);

    // Convert the students array to a JSON string
    const stringify = JSON.stringify(students);

    // Store the JSON string in localStorage under the key "students"
    localStorage.setItem("students", stringify);
}






 
