import Person from "./Person";

describe("Person", () => {
  let person;

  beforeEach(() => {
    person = new Person();
  });

  test("Person has expected properties", () => {
    expect(person).not.toHaveProperty("name");
    expect(person).toHaveProperty("getName");
    expect(person).toHaveProperty("setName");
    expect(person).not.toHaveProperty("age");
    expect(person).toHaveProperty("getAge");
    expect(person).toHaveProperty("setAge");
    expect(person).not.toHaveProperty("savings");
    expect(person).toHaveProperty("givePaycheck");
    expect(person).toHaveProperty("hasEnoughSavings");
  });

  test("Person getters and setters work", () => {
    person.setName("Adam");
    person.setAge(17);

    expect(person.getName()).toBe("Adam");
    expect(person.getAge()).toBe(17);
  });

  test("Person initial savings are 0", () => {
    expect(person.hasEnoughSavings(0)).toBeTruthy();
    expect(person.hasEnoughSavings(1)).toBeFalsy();
  });

  test("Person savings can be increased and checked", () => {
    person.givePaycheck();
    expect(person.hasEnoughSavings(1)).toBeTruthy();
    expect(person.hasEnoughSavings(100)).toBeTruthy();
    expect(person.hasEnoughSavings(101)).toBeFalsy();
    person.givePaycheck();
    expect(person.hasEnoughSavings(200)).toBeTruthy();
    expect(person.hasEnoughSavings(201)).toBeFalsy();
  });
});
