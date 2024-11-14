export class person {
    constructor(firstname, lastname, email, birthyear, work, gender) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.birthyear = birthyear;
        this.work = work;
        this.gender = gender;

    }
    greeting() {
        console.log(`Hej jeg hedder ${this.firstname} ${this.lastname}`);
    }

    age() {
        console.log(`Jeg er ${new Date().getFullYear() - this.birthyear} år gammel`);
    }

    callcard() {
        console.log(this.firstname, this.lastname, this.email, this.work);
        
    }
}