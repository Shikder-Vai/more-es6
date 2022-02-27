class takmil {
  name;
  address;
  iMarks;
  constructor(name, address, iMarks) {
    this.name = name;
    this.address = address;
    this.iMarks = iMarks;
    if (iMarks >= 50) {
      console.log(this.name, "Your are admitted");
    } else {
      console.log(this.name, "Sorry Your are not admitted");
    }
  }
}
const student = new takmil("sakib", "foridpur", "50");
console.log(student);

//

/*
class Support {
  name;
  designation = "Support Web Dev";
  address = "BD";
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
  startSession() {
    console.log(this.name, "start a support session");
  }
}

const aamir = new Support("Aamir Khan", "BD");
const salman = new Support("Solaiman Khan", "Dubai");
const sharuk = new Support("SRK Khan", "Dubai");
const akshay = new Support("Akshay Kumar", "Dubai");
aamir.startSession();
salman.startSession();
console.log(aamir, salman, sharuk, akshay);
*/
// console.log(salman);
