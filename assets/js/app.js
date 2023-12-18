class testObject {
  constructor(msg) {
    /* console.log("Hello my old friend" + msg) */
    this.message = msg;
    console.log(this.message);
  }
}

const myObject = new testObject("object 1");
const myObject2 = new testObject("object 2");

myObject.message = "new message";
myObject2.message = "Sven";

console.log(myObject.message);
console.log(myObject2.message);

class car {
  constructor(make, model, year, condition) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.condition = condition;
  }

  getInfo() {
    return(
      `jeg har en ${this.make}, ${this.model} fra ${this.year}. Den er i ${this.condition} stand`
    );
  }

  getSummary() {
    return(
      `jeg har en ${this.make}, ${this.model} fra ${this.year}.`
    );
  }
}


/* const myCar = new car("audi", "a3", 2011, "god");
const myCar2 = new car("MG", "plugin hybrid", 2017, "fantastisk"); */

const myCars = []
myCars.push(new car("audi", "a3", 2011, "god"));
myCars.push(new car("MG", "plugin hybrid", 2017, "fantastisk"));

console.log(myCars[0].make = 'John deere');
console.log(myCars[0].getInfo());


