class Stack {
  // default value allows stack to initialize without an argument
  constructor(container = []) {
    this.container = container;
  }

  // adds an element to the top of the stack
  addToStack(el) {
    return this.container.push(el);
  }

  // removes an element from the top of the stack
  removeFromStack() {
    return this.container.pop();
  }
}

module.exports = Stack;



// Create a function which accepts three arguments name, age, and city.
// We will be creating an object with a function instead of a class.
function createUser(name, age, city) {
  // Create an user object and map the function arguments to a key in the object.
  const user = {
    name,
    age,
    city
  };

  // Return two inner functions.
  return {
    introduceSelf: function () {
      // Instead of using the `this` keyword, we use the object we created in the outer function's scope.
      console.log(`Hi my name is ${user.name} and I am currently ${user.age} years old!`)
    },

    location: function () {
      console.log(`${user.name} is located in ${user.city}`)
    }
  }
}


// Create a user without using the `new` keyword different from how we do it with classes.
const userOne = createUser('Beverly', 58, 'Phoenix')

// Call the two methods attached to our `createUser` function to see if the user object is logging the correct values.
userOne.introduceSelf()
userOne.location()







