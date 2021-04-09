function Logger(logString: string) {
    console.log('LOGGER FACTORY')
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
    console.log('TEMPLATE FACTORY')
  return function (constructor: any) {
      console.log('Rendering template')
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}

//@ is a pointer to the function
@Logger("LOGGING - PERSON")
@WithTemplate("<h1>My Person Object</h2>", "app")
class Person{
  name = ["Isa"];

  constructor() {
    console.log("Creating person object...");
  }
}

const pers = new Person();
console.log(pers);