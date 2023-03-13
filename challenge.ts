interface User {
  name: string
  age?: number
  birthday?:string
}

// challenge.ts
const prettyPrintWilder = (users:Array<User>) => {
  users.map((user:User) => {
    user.age && console.log(`${user.name} is ${user.age} years old`);
    user.birthday && console.log(`${user.name} was born in ${user.birthday}`);
  });
};

const wilders: Array<User> = [];
const user1 = { name: "Pierre", age: 23 };
const user2 = { name: "Paul", birthday: "10/02/1990" };
const user3 = { name: "Jacques", age: 25 };
wilders.push(user1);
wilders.push(user2);
wilders.push(user3);
prettyPrintWilder(wilders);