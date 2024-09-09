//constructor
function Player(name,marker){
    this.name = name;
    this.marker = marker;
    this.sayName=function(){
        console.log("My name is " + this.name);
    }
}

const player1=new Player('Steve','X');
const player2=new Player('john','Y');

player1.sayName();
player2.sayName();


function Book(title,author,pages,haveRead){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.haveRead=haveRead;

    this.info=function(){
        return(this.title+" by "+this.author+", "+this.pages+" pages, "+this.haveRead);
    }
}

const theHobbit=new Book('the hobbit','J.R.R Tolkien','295','not read yet');

console.log(theHobbit.info());

Player.prototype.sayHello=function(){
    console.log('Hello, my name is '+this.name);
};

player1.sayHello();
player2.sayHello();




