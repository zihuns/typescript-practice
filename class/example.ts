class Person {
  public constructor(public name: string, private age: number) {}
}

const p1: Person = new Person("Mark", 39);
console.log(p1);