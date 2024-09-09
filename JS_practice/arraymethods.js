const items=[
    {name:'Bike',price:100},
    {name:'TV', price:200},
    {name:'album',price:10},
    {name:'BOOK',price:5},
    {name:'Phone',price:500},
    {name:'Computer',price:1000},
    {name:"keyboard",price:25}
]

//()=>  function(arg){}  --->same shit
// filter method
const filteredItems=items.filter((item)=>{
    return item.price>100;
})

 console.log(filteredItems);

 console.log(items);

//map method

const itemNames=items.map((item)=>{
    return item.price;
})
console.log(itemNames);

//find

// const foundItems=items.find((item)=>{
//     return item.price ===500;
// });

// console.log(foundItems);

//forEach loop
items.forEach((item)=>{
    console.log(item.name);
})

// const hasInexpensiveItems=items.some((item)=>{
//     return item.price<=100;
// })

// console.log(hasInexpensiveItems);

// const hasInexpensiveItems=items.every((item)=>{
//     return item.price<=100;
// })

// console.log(hasInexpensiveItems);

// const total=items.reduce((currentTotal,item)=>{
//     return currentTotal+item.price;
// },0);

// console.log(total);

//includes method
const arr2=[2,3,4];

const hastwo=arr2.includes(2);

// console.log(hastwo);
