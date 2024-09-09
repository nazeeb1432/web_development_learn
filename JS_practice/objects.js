let user={
    name: 'John Doe',
    age: 25,
    email: 'john.doe@example.com',
    isAdmin: true,
}

console.log(user.email);
console.log(user.name);

//let key=prompt("what do you want to know about the user?");

// console.log(user["age"]);

// function makeUser2(name,age){
//     return {
//         name:name,
//         age:age,
//     }
// }

// let user2=makeUser2("nazeeb",22);
// console.log(user2.name);

// for(let key in user){
//    console.log(key);
//     console.log(user[key]);
// }

// let codes={
//     "+49":"Germany",
//     "+41":"Switzerland",
//     "+44":"UK",
//     "+33":"France",
//     "+1":"USA"
// }

// for (let code in codes){
//     console.log(+code,codes[code]);
// }

// let user3={};

// function isEmpty(obj){
//     for(let key in obj){
//         return false;
//     }
//     return true;
// }

// alert(isEmpty(user3));

// user3.name="John Doe";

// alert(isEmpty(user3));

let salaries={
    John:100,
    Ann:160,
    Pete:130
}
 let sumSalary=0;

 for(let key in salaries){
     sumSalary+=salaries[key];
 }

 console.log("sum salary: "+sumSalary);

 function multiplyBytwo(obj){
    for(let key in obj){
        if(typeof obj[key] == 'number'){
            obj[key]*=2;
        }
    }
 }
 multiplyBytwo(salaries)
 console.log(salaries);




