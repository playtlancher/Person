class Person{
    firstName;
    lastName;
    age;
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    isAdult() {
        return this.age>=18;
    }
    getFullName(){
        return this.firstName + " " + this.lastName;
    }
}

function check(form){
    let person = new Person(form.firstName.value, form.lastName.value, parseInt(form.age.value));
    let adult = "Not adult"
    if(person.isAdult())
        adult = "Adult"
    document.getElementById("result").innerText = person.getFullName() + "  " + adult;
    return false;
}