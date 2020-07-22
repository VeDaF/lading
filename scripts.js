function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function hello() {
        console.log('Hello' + this.name);
    };
}
let ivan = new User('ivan', 25);