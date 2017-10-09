let person = {
  name: 'Tyron',
  age: 40,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM',
  sayHello: function() {
    return `Hello, my name is ${this.name}`;
  },

  sayGoodbye() {
    return 'Goodbye!';
  }

};
var friend = {
  name: 'Tino'
}
friend.sayHello = person.sayHello

console.log(person.sayHello());

person.hobbies = ['Basketball', 'Coaching'];
person.hobbies = ['Basketball'];
console.log(person.hobbies);


console.log(person['name']);
console.log(person['age']);

let day = 'Tuesday';
let alarm;

if (day === 'Saturday' || day === 'Sunday' ) {
  alarm = 'weekendAlarm';
} else {
  alarm = 'weekAlarm';
}

console.log(person[alarm]);
console.log(friend.sayHello())

// getters and setters
let person = {
  _name: 'Lu Xun',
  _age: 137,
 	set age(newAge) {
  	if(typeof newAge === 'number') {
      this._age = newAge
      console.log(`Age is now ${newAge}`)
    }
    else {
      console.log('Invalid input')
    }
	},
  get age() {
    console.log(`${this._name} is ${this._age} years old.`)
  }
};

console.log(person.age)
