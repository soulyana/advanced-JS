 /**
  * Everything is an object
  * Inheritance & the Prototype Chain 
  */

  /**
   * Every JavaScript object has a prototype property, which makes inheritance possible in JavaScript:
   * 
   * The prototype property of an object is where we put methods and properties that we want other objects to inherit:
   * 
   * The Constructor's prototype property is NOT the prototype of the Constructor itself, it's the prototype of ALL instances that are created through it:
   * 
   * When a certain method (or property) is called, the search starts in the object itself, and if it cannot be found, the search moves on to the object's prototype. This continues until the method is found: prototype chain,
   */

   /**
    * Creating Objects: Function Constructor
    */
   /*

    var john = {
        name: 'John',
        yearOfBirth: 1990,
        job: 'teacher'
    };

    var Person = function(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    Person.prototype.calculateAge = function() {
        console.log(2019 - this.yearOfBirth);
    }

    Person.prototype.lastName = 'Smith';

    var john = new Person('John', 1990, 'teacher');
    var jane = new Person('Jane', 1969, 'designer');
    var mark = new Person('Mark', 1948, 'retired');


    john.calculateAge();
    jane.calculateAge();
    mark.calculateAge();

    console.log(jane.lastName);
    console.log(john.lastName);
    console.log(mark.lastName); 

    /**
     * The prototype chain in the console
     */
    /*

     console.log(jane);
     console.log(john.prototype);
     console.log(Person);
     console.log(john._proto_);
     console.log(john.hasOwnProperty('job'));
     console.log(john.hasOwnProperty('lastName')); // not own property
     console.log(john instanceof Person);

     var x = [2,4,6];
     console.info(x);
     console.log(x.length);
     */

     /**
      * Creating Objects: Object.create
      */

        // Object.create
      var personProto = {
        calculateAge: function() {
            console.log(2019 - this.yearOfBirth);
        }
      }

      var john = Object.create(personProto);
      john.name = 'John';
      john.yearOfBirth = 1990;
      john.job = 'teacher';

      var jane = Object.create(personProto, {
          name: { value: 'Jane' },
          yearOfBirth: { value: 1969 },
          job: { value: 'designer' }
      });