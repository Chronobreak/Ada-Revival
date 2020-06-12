function greeter(person: Array<any>) {
  return "Hello, " + person;
}

let user = [1, 2, 3, "DG"];

document.body.textContent = greeter(user);